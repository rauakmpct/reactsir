import React, { useState } from 'react'

function UseState1() {
    const [count, setCount] = useState(0);
  return (
    <>
    Count: {count}
      <button onClick={() => setCount()}> Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  )
}

export default UseState1