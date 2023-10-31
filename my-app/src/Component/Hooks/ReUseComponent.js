import React from 'react'

function ReUseComponent(props) {
  return (
    <>
    <h1>ReUseComponent</h1>
    <h2>{props.item.name}</h2>
    <h2>{props.item.email}</h2>
    <h2>{props.item.phone}</h2>



    
    </>
  )
}

export default ReUseComponent