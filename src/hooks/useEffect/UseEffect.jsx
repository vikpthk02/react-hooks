import React, { useState, useEffect } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> + </button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}> - </button>
        </div>
    )
}
