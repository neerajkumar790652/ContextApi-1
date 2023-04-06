import React from 'react';
import { useContext } from 'react';
import MyContext from './MyContext'

const D = () => {
  const dataContext = useContext(MyContext)
  return (
    <div>
      <h1>D components</h1>
      <p style={{color:"brown",fontSize:"30px"}}>{dataContext}</p>
    </div>
  )
}

export default D
