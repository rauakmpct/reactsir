import React, { useContext } from 'react'
import { myContext } from './UseContext'

function Child3() {
    const data = useContext(myContext)
    return (
        <>
            <h1>Child3{data}</h1>
        </>
    )
}

export default Child3