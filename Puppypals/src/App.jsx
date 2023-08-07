import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppyList)
  return (
    <>
      <div >
        {puppies.map((puppy) => {
          return <p onClick={()=>{console.log("puppy.id: ", puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
