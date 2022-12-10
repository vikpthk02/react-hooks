import React, { useRef } from 'react'

const UseRef1 = () => {
    const inputRef = useRef();
    const updateHandle = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "#82E0AA";
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <br />
            <button onClick={updateHandle}>Submit</button>
        </div>
    )
}

export default UseRef1
