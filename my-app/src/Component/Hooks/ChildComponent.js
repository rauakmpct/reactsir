import React,{memo} from 'react'

function ChildComponent({increment}) {
    console.log('child render')
  return (
    <>
    <h1>Child Component</h1>
    <button onClick={increment} >Increment</button>
    </>
  )
}

export default memo(ChildComponent)