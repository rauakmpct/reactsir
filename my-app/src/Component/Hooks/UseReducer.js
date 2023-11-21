import React, { useState } from 'react'
import Counter from './Counter';

function UseReducer() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>useReducer Hook</h1>

            {/* Example 1 */}
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>INCREMENT Count</button>
            <button onClick={() => setCount(count - 1)}>DECREMENT Count</button>

            <br/><br/>
            <Counter/>
        </>
    )




    
}

export default UseReducer