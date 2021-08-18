import axios from 'axios';
import {useState,useEffect} from 'react';
function Search(){
  let [term,setTerm] = useState('');
    let handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(term)
        // setTerm('');
    }
    
    // console.log(term)
    let [data, setData] = useState([]);
    useEffect(() => {
        myFunc();
        return () => {
        }
      }, []);
    const myFunc= async ()=>{
        let response= await axios.get(`https://api.github.com/users/${term}`, {
            headers: {
                "Authorization": "token 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",

            }, params:{

                'per_page':'30'
            }
          });
        console.log (response);
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
            //  console.log(newResponse)
        const finalResponse= await newResponse.map(function(newobj){
            return newobj.data
        })
        setData(finalResponse);
      } 

    
    return(
    <div style={{width:'100%',alignItems:'center', marginLeft:'70px'}}>
        <form onSubmit={handleFormSubmit}>
            <label style={{color:'white'}}>Search User Here</label>
            <br/>
            <input type= 'text'value={term} onChange={e=>setTerm(e.target.value)}/>
        </form>
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
             </div>
    </div>
    )
}
export default Search;



    
