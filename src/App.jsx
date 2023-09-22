import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const countries =[
    {name:"india",value:"IN",cities:["delhi","Mumbai"]},
    {name:"Pakistan",value:"PK",cities:["karachi","lahore"]},
    {name:"Bangladesh",value:"BG",cities:["dahka","Chittagong"]}
  ]
  const [country,setCountry]=useState(0)

  const changeHandler=(e)=>{
      console.log(e.target.value)
      setCountry(e.target.value)
  }

  return(
    <>
    <select onChange={changeHandler}>
      {countries.map((item,index)=>{
        return( <option key={index} value={index}>{item.name}</option>)
         
      })}
    
  </select>
  <select>
    {console.log(countries[country].cities)}
      {countries[country].cities.map((item,index)=>{
        return( <option key={index} value={index}>{item}</option>)
         
       })}

  </select>
    </>
  )
  
}

export default App
