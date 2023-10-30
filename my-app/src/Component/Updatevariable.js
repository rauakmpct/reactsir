import React from 'react'

function Updatevariable() {
    let data = 'ram'
    function updatedata(){
        data = 'rohit'
        alert(data)
    }
    console.log('component render')
  return (
    <>
    <h1>Click function use</h1>
    <h2>{data}</h2>
    <button onClick={updatedata}>Click me</button>
    </>
  )
}

export default Updatevariable;