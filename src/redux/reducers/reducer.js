// Reducer are functions that takes initial state
// & action as an argument and return new state as a output.
const initialState = 0;

export default function changeTheNumber(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state === 0 ? 0 : state - 1;
        default: return state;
    }

}