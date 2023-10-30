import React, { useState } from 'react';

function State1() {
    const [count,setCount] = useState(0)
    console.log('update render')
  return (
    <>
    <h1>You clicked {count} times </h1>
    <button onClick={()=>setCount(count+1)} >click me</button>
    </>
  )
}

export default State1;