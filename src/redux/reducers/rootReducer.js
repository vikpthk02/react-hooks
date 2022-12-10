import changeTheNumber from "./reducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    // reducer_1,
    // reducer_2,...
});

export default rootReducer;

