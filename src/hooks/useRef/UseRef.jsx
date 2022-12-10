import React, { useRef, useState, useEffect } from 'react'

// useRef: useRef is used to create a mutable variable, which will not re-render the comp.
// It will able to directly access the dom elements. 

const UseRef = () => {
    const [userInput, setUserInput] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    })
    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <p>Number of time comp render: {count.current}</p>

        </div>
    )
}

export default UseRef
