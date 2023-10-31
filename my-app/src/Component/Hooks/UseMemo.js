import React, { useState , useMemo } from 'react'

function UseMemo() {
    const [count, setData] = useState(0);
    const [item, setItem] = useState(10);
    // function Multicount() {
    //     console.log('Multicount')
    //     return count * 5
    // }
    const MulticountMemo = UseMemo(function Multicount(){
        console.log('Multicount')
        return count*5
    },[count])
    return (
        <>
            <h1>UseMemoHook</h1>
            <h1>Hooks in React : {count}</h1>
            <h1>Hooks in item: {item}</h1>
            <h2> Multicount:{MulticountMemo}</h2>
            <button onClick={() => setData(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </>
    )
}

export default UseMemo