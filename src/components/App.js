
import React, { use, useEffect, useRef, useState } from "react";
import './../styles/App.css';
import indianCities from "./indiancities";

const App = () => {
  let [show, setShow] = useState(false)
  let [cities, setCities] = useState("")
  let [getCities, setGetCities] = useState(null)

  function searchCity() {
    let x = indianCities.filter((v) => {
      return v.toLowerCase().includes(cities)
    })

    setGetCities(x)
    console.log(x);


  }

  useEffect(() => {
    searchCity()
  }, [cities])


  console.log(cities);


  return (


    <div style={{ display: "flex", flexDirection: "column", alignContent: "flex-start" }}>
      <h1>Search cities of India</h1>
      <form>
        <input type="text" style={{ padding: "10px", height: "45px", width: "500px" }} onChange={(e) => {
          setShow(true)
          setCities(e.target.value)
        }} value={cities} />
      </form>
      <div style={{ padding: "10px", height: "300px", width: "500px", border: "1px solid black", overflow: "auto" }} >
        <ul>
          {getCities && show && getCities.map((v) => {
            return <li onClick={(e) => {
              setShow(false)
              setCities(e.target.textContent.toLowerCase())
            }} style={{ padding: "10px 20px", border: "1px solid black" }} className="city_name">{v}</li>
          })}
        </ul>
      </div>

    </div>
  )
}

export default App
