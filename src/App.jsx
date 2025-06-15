import { useState } from 'react'
import {puppyList} from './data.js'
import './index.css'

 

function App() {


const [puppies] = useState(puppyList);
   console.log("puppyList: ", puppyList);
   
const [featPupId, setFeatPupId] = useState(null);

    const featuredPup = puppies.find((pup)=> pup.id === featPupId)
      console.log(featuredPup)
  
    

    

 return (
    <div className="App">
      <h1>Puppy List</h1>
  
           
<table>
    <thead>
        <tr>
            <th>Puppy Names</th>
        </tr>
    </thead> 
</table>
      
       {puppies.map((puppy) => {
         return (
           <button onClick={() => {setFeatPupId(puppy.id)}}
              key={puppy.id}>{puppy.name}</button>
         );
       })}
         {featPupId && (
    <div>
<h2>{featuredPup.name}</h2>

         <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
        </ul>
    </div>
      )} 
       

    </div>
    
  );
}
 
 
 


export default App
