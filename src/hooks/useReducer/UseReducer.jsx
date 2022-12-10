import React, { useReducer } from 'react';
import reducer from "./reducer";

// useReducer hook is used as a state-manager, similer as useState hook,
// Its more efficient and powerful as compare to useState 
// Its takes two arguments 
// 1. REDUCER FUNCTION      2. INITIAL-STATE
// DISPATCH : When we have to update the state, dispatch will trigger the action method in reducer function,
//  Its sends the type of action to reducer function in order to updating the state.

const UseReducer = () => {
    const initialVal = 0;
    const [count, dispatch] = useReducer(reducer, initialVal)
    return (
        <div>
            <button onClick={() => dispatch({ type: "INC" })}> + </button>
            {count}
            <button onClick={() => dispatch({ type: "DEC" })}> - </button>
        </div>
    );
}

export default UseReducer;
