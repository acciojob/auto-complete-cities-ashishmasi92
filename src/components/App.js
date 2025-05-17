
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import indianCities from "./indiancities";

const App = () => {
  let [inputVal,setInputVal] = useState("")
  let [cities,setCities] = useState([])
  let [showSuggestion,setShowSuggestion] = useState(false)


  useEffect(()=>{
    if(inputVal!=""){

      let x = getCities()
      setCities(x)
      setShowSuggestion(true)
    }
  },[inputVal])
   
  function searchCity(e){
    let {value} = e.target 
    setInputVal(value)
  }
    
function getCities(){
  return indianCities.filter((v)=>{
    return v.toLowerCase().includes(inputVal.toLowerCase())
  })
}


function selectedCity(v){
  setInputVal(v)
  setCities([])
  setShowSuggestion(false)
}



 
  
  return (


    <div>

<form>
  <label htmlFor="search"> Search cities of india
  </label>
    <input style={{display:"block", height:"30px", width:"300px", fontSize:"20px" }} type="text" onChange={searchCity} value={inputVal} />
</form>

{
  showSuggestion&& inputVal && cities.length>0&&(
    <ul>
      {
        cities.map((v,i)=>{
          return <li onClick={()=>{
            selectedCity(v)
          }} style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
              }} key={i}>{v}</li>
        })
      }
    </ul>
  )
}



    </div>
  )
}

export default App
