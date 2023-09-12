import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState:initialState,
    reducers: {
        //actions
        increment: (state, action) => {
            console.log(state);
            console.log(action);
            return { ...state, counter: state.counter + 1 }
        },
        decrement:(state,action)=>{
            console.log(state);
            console.log(action);
            return { ...state, counter: state.counter - 1 } 
        },
        reset:(state,action)=>{
            return {...initialState}
        }
    }
});
//actions wil be consumed by components
export const{increment,decrement,reset} = counterSlice.actions;
//reducers will be consumed by store.
export default counterSlice.reducer;