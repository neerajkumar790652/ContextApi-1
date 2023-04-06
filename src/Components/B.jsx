import React from 'react';
import C from './C';
import { useContext } from 'react';
import MyContext from './MyContext';

const B = () => {
 const dataContext = useContext(MyContext)
  return (
    <div>
      <h1>B components</h1>
      <p style={{color:"blue",fontSize:"30px"}}>{dataContext}</p>
      <C/>
    </div>
  )
}

export default B
