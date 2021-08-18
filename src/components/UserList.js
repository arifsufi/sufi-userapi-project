import axios from 'axios';
import {useState,useEffect} from 'react';
const UserList = ()=>{
    let [data, setData] = useState([]);
    let [since,setSince] = useState(0);
    let [page ,setPage] =useState([]);
    useEffect(() => {
        myFunc();
        return () => {
        }
      }, []);
      let handleClick=()=>{
        setSince(since=data[29].id);
        myFunc();
      } 


      const myFunc= async ()=>{
        let response= await axios.get('https://api.github.com/users', {
            headers: {
                "Authorization": "token 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"
            }, params:{
                'since':since,
                // Math.floor(Math.random() * 100) ,
                'per_page':'30'
            }
          });
          console.log(since);
        console.log (response)
        let dataArray = response.data; 
        // console.log(dataArray);
        const loginArray = dataArray.map(function(obj){return obj.login});
        // console.log(loginArray)
        const newResponse= await Promise.all(loginArray.map(function async(login){
                return axios.get(`https://api.github.com/users/${login}`, {
                    headers: {
                        "Authorization": "token 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"
                    }
                  });
            }));
            // console.log(newResponse)
        const finalResponse= newResponse.map(function(newobj){
            return newobj.data
        })
        setData(
          prevData=>{ if (prevData.length){
            return new[...prevData,...finalResponse]
          }
          else{
              return finalResponse;
          }
        });
      } 
      return (
                <div className='container'>
                    <div className="row row-cols-1 row-cols-md-3" >
                    
                        { data.map(function(data){
                        return(
                                <div className="card" style={{ width: "15rem",margin:"9px" }} key={data.id}>
                                    <img src={data.avatar_url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" styles={{margin:"0"}}><strong>{data.login}</strong></h5>
                                        <hr />
                                        <p><strong>Followers:</strong>{data.followers}</p>
                                        <p><strong>Following:</strong>{data.following}</p>
                                        <a href={data.html_url} target="_blank" rel="noreferrer" className="btn btn-primary">Github Link</a>
                                    </div>
                                </div>
                                )
                        })
                    }
                  </div>
                <button onClick={handleClick} style={{textAlign:'center',
                width:'100%'
                ,marginBottom:'5px',
                fontWeight:'700'}}>New Page</button>
                </div>
            ); 

}
export default UserList