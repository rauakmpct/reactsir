import React, { useReducer } from 'react';
import Counter from './Counter';

function UseReducer1() {
  // First render will create the state, and it will
  // persist through future renders
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  return (
    <>
      {sum}

      <button onClick={() => dispatch(1)}>
        Add 1
      </button>
    </>
  );
}

export default UseReducer1