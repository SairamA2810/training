import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type CounterType={
    counter:number,
}

let counterInitialState:CounterType={
    counter:0
}

const counterSlice=createSlice({
    name:"counter",
    initialState:counterInitialState,
    reducers:{
        incrementCounter:(state,action:PayloadAction)=>{
            state.counter++;
        },
        decrementCounter:(state,action:PayloadAction)=>{
            state.counter--
        }
    }
})



export const { incrementCounter, decrementCounter} = counterSlice.actions;
export default counterSlice.reducer;