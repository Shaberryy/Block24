import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { puppyList } from "./data.js";
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log("puppyList: ", puppyList)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  return (
    <>
      <div >
        {puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })}
          {/* { featPupId && <p>{ featPupId }</p> }  */}
          {featPupId && (
        <div>
          {/* <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Puppy_logo.svg/1200px-Puppy_logo.svg.png" alt="pupLogo" className="pupLogo"/></h1> */}
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            {/* <li>Image: {featuredPup.img}</li> */}
          </ul>
        </div>
      )}
      </div>
    </>
    
  );
}

export default App;
