import React, { useState, useMemo } from 'react';

function UseMemo1() {
  const [counter, setCounter] = useState(0);
  const memoizedValue = useMemo(() => {
    // This is an expensive computation
    return Math.pow(counter, 2);
  }, [counter]);

  return (
    <>
     <p>Counter: {counter}</p>
      <p>Memoized value: {memoizedValue}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </>
     

  );
}
export default UseMemo1