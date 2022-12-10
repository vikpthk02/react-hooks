import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./action/index";

export default function Index() {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Increment & Decrement Counter</h2>
            <button style={{ paddingLeft: "15px", paddingRight: "15px", margin: "15px" }} onClick={() => dispatch(incrementCount())}><b>+</b></button>
            <input value={myState} type="text" style={{ width: "80px", height: "30px", color: "black", backgroundColor: "lightgoldenrodyellow", }} />
            <button style={{ paddingLeft: "15px", paddingRight: "15px", margin: "15px" }} onClick={() => dispatch(decrementCount())}><b>-</b></button>
        </div>
    )
}
