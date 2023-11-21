import React,{useCallback, useState} from 'react'
import ChildComponent from './ChildComponent'

function UseCallBackHook() {
    const [count,setCount] =useState(0)
    console.log("parent rendered!")
const [count2 ,setCount2] = useState(0)
const incrementcount = useCallback(()=>{
  setCount2(prevCount => prevCount +1);
  console.log('UsecallbackHook')
},[])
  return (
    <>
    <h1>UseCallback </h1>
         {/* example 1 */}
         <h2>Count 1 : {count}</h2>
         <button onClick={()=>setCount(count +1)}>Increment Count</button>
         <br></br><br></br>
         {/* example 2 */}
         <h2>Count 2 : {count2}</h2>
         <ChildComponent increment={incrementcount} />
    </>
  )
}

export default UseCallBackHook