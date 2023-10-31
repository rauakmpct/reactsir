import React from 'react'

function SendDataChildTo(props) {
  const data = {name:'ram', email:'ram@gmail.com'}
  return (
    <>
    <h2>Send Data Child To Parent </h2>
    <button onClick={()=>props.alert(data)} >Click me</button>
    </>
  )
}

export default SendDataChildTo