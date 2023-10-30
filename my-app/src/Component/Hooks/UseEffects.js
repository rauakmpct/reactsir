import React, { useEffect, setItem, useState } from 'react'

export default function UseEffects() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(0)


    useEffect(() => {
        console.log('count useEffect')
    }, [count]) // Array sign for  
    useEffect(() => { 
        console.log('setItem useeffect ')
    }, [item])
    console.log('render')
    return (
        <>
            <h1>User Effect {count} </h1>
            <h2>Set Item {item}</h2>
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <br />
            <button onClick={() => setItem(item + 1)}>Update Item</button>
        </>
    )
}
