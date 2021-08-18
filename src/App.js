  import React from 'react';
  import './App.css'
  import Navbar from './components/Navbar';
  import Search from './components/Search';
  import Fetcher from './components/Fetcher';
  import UserList from './components/UserList';
  import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
  // let userObj,responseArray,newResponse;
    
const App = () => {
return (
  <div className='container'>
    <Router>
      <div className="App">
          <Navbar/>  
          <Switch>
            <Route path="/search" component={Search}/>
            <Route path="/fetcher" component={Fetcher}/>
            <Route path="/userlist" component={UserList}/>
          </Switch>
        </div>
    </Router>
  </div>

)
}
export default App;
