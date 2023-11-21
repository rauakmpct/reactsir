import { useEffect } from 'react';

function UseEffect4({ name }) {
    const message = `Hello, ${name}!`;   // Calculates output

    useEffect(() => {
        // Good!
        document.title = `Greetings to ${name}`; // Side-effect!
    }, [name]);

    return
    <>
        <div>{message}</div>
    </>
}

export default UseEffect4