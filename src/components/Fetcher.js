import axios from 'axios';
import {useState,useEffect} from 'react';
import RandUser from "./RandUser";
import UserList from './UserList';
const Fetcher =()=>{

      // let Rgen =function generateRandomInteger(max) {
      //   return Math.floor(Math.random() * max);
      // }
         
    // let userId= Rgen(29);
      useEffect(() => {
        myFunc();
        return () => {
        
        }
      },[] );
      let [data, setData] = useState([]);
      let [userId, setUserId] = useState(Math.floor(Math.random() *30));
      const idSetter=()=>{
        setUserId(Math.floor(Math.random() *30));
      }
      
      const myFunc= async ()=>{
        let response= await axios.get('https://api.github.com/users', {
          headers: {
              "Authorization": "token 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"
              
            }, 
          params:{
              'since': Math.floor(Math.random() * 100) ,
              'per_page':'30'
              
          }
        });
        let dataArray = response.data; 
        console.log(dataArray)
        const newResponse= await axios.get(`https://api.github.com/users/${dataArray[userId].login}`,{headers: {
              "Authorization": "token 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"
          }});
        const finalResponse= newResponse.data
        console.log(finalResponse);
        setData(finalResponse);
      }
    
        
      return ( 
        <div>
            <RandUser data={data} myFunc={myFunc} idSetter={idSetter}/>
        </div>
            );  
}
export default Fetcher