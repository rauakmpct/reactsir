import React, { useReducer } from 'react'
const reducer = (state, action) => {
  // console.log('state',state)
  console.log('action',action.type)
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function Counter() {
  const initialState = 0
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Counter</h1>
      <h2>Count:{state}</h2>
      <button onClick={() => dispatch({ type: 'incrememnt' })}>INCREMENT Count</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>DECREMENT Count</button>
    </>
  )
}

export default Counter