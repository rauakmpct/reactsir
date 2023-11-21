import React, { createContext } from 'react'
import Child1 from './Child1'
import Child3 from './Child3'
import Child2 from './Child2'

const myContext = createContext()

function UseContext() {
    const name = 'rahul'
    return (
        <>
            <h1>UseContext</h1>
            < myContext.Provider value={name} >
                <Child3 />
            </myContext.Provider>
            <Child1 />

        </>
    )
}

export default UseContext
export { myContext }