import {Link} from 'react-router-dom'
function Navbar(){






    return(
        <div className='container'>
            <nav className='navb'>
                <ul style={{  
                    fontSize:'1.5rem',
                    fontWeight:'500',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    listStyle:'none',
                    width:' 100%',
                    padding:  '10px',
                    backgroundColor:"cadetblue"
                    }}>
                    <Link to="/Fetcher" style={{textDecoration:'none'}}><li>Random User </li></Link>
                    <Link to="/search"style={{textDecoration:'none'}}><li>Search User</li></Link>
                    <Link to="/userlist"style={{textDecoration:'none'}}><li>User List</li></Link>
                    <li>Component 3</li>
                </ul>
             </nav>
        </div>
    )
}
export default Navbar;



 

