import React,{forwardRef} from 'react'

function Forwardref(props,ref) {
  return (
    <>
    <input type="text" ref={ref}/>
    </>
  )
}

export default forwardRef(Forwardref)