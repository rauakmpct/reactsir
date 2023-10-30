import React, { useState } from 'react'

function State() {
    const [data,setdata] = useState('ram')
    function updatedata(){
        setdata('sita')
    }
   console.log('render update')
  return (
    <>
    <h1>state in react</h1>
     <h2>{data}</h2>
    <button onClick={updatedata}>Click me</button>
    </>
  )
}

export default State;