import React,{useState} from 'react'
import B from './B';
import MyContext from './MyContext';


const A = () => {
  const [data,setData]=useState("geekster")
  return (
    <div>
      <h1>A components</h1>
      {data}
      <button onClick={()=>{setData("Neeraj")}} style={{marginLeft:"20px"}}> send data to D</button>
      <MyContext.Provider value={data}>
        <B/>
      </MyContext.Provider>
        
      
      
    </div>
  )
}

export default A
