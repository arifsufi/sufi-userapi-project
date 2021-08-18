
function RandUser(props){
    console.log(props)
  return ( 
          <div className='container'>
            <div className="card" style={{ width: "20rem"}}>
              <img src={props.data.avatar_url} className="card-img-top" alt="..." style={{padding:'10px',margin:'0'}} />
              <div className="card-body">
                <h5 className="card-title"><strong>{props.data.login}</strong></h5>
                <hr />
                <p><strong>Followers:</strong>{props.data.followers}</p>
                <p><strong>Following:</strong>{props.data.following}</p>
                <a href={props.data.html_url} target="_blank" rel="noreferrer" className="btn btn-primary" style={{marginRight:'20px'}}>Github Link</a>
                <button className="userGen btn btn-primary" onClick={()=>props.myFunc(props.idSetter)}>Random User</button>
              </div>
            </div>
          </div>
        );  
  }
export default RandUser;





