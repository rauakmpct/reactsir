import React, { useState } from 'react'

function Showhide() {
    const [status,setStatus] = useState(true)
  return (
<>
{
    status ? <h1>Hello Gwalior</h1> : null

}
<button className='btn btn-danger' onClick={()=>setStatus(false)} >Hide</button>
<button className='btn btn-success' onClick={()=>setStatus(true)} >Show</button>
<button className='btn btn-info' onClick={()=>setStatus(!status)} >Toggle</button>


</>
  )
}

export default Showhide;