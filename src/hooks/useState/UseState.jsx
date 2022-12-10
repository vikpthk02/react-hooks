import React, { useState } from 'react'


export default function UseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h2>{count}</h2>
            <button onClick={() => {
                if (count === 0) {
                    setCount(0);
                }
                else {
                    setCount(count - 1)
                }
            }}>-</button>
        </div>
    )
}

