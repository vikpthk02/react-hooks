// REDUCER: reducer function takes two arguments 'state' & 'action'
// again Action has method name 'type'
const reducer = (state, action) => {
    if (action.type === "INC") {
        return (state = state + 1);
    }
    if (action.type === "DEC") {
        return (state = state - 1);
    }

    return state;
}

export default reducer