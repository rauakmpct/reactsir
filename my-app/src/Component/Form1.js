import React, { useState } from 'react'

function Form1() {
  const [username,setUsername] = useState()
  const[password,setPassword] = useState()

  const submitHandlerData=(e)=>{
    e.preventDefault()
    console.log(username,password)
  }
  return (
    <>
    <h1 className='text-center' >Form</h1>
    <div className='container' > 
    <form onSubmit={submitHandlerData} >
        <div className='mb-3' >
            <label>Username</label>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" className='form-control' />
        </div>
        <div className='mb-3' >
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control' />
        </div>
        <button type='submit' className='btn btn-danger' >Submit</button>
    </form>

    </div>
  
    
    </>
  )
}

export default Form1;