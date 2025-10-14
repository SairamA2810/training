import {createSlice,current, type PayloadAction} from "@reduxjs/toolkit" 

// create user type 
export type UserType={
    username:string,
    age:number;
}

// Create user Initial state 
let userInitialState:UserType[]=[]


// create a slice 
const userSlice=createSlice({
    name:"user",
    initialState:userInitialState,
    reducers:{
        addNewUser:(state,action:PayloadAction<UserType>)=>{  //action:{type:"",payload:newUser}  here state is containing initial state
            // add new User
            state.push(action.payload)  //here state is userInitialState
        },
        deleteUser:(state,action)=>{
            // to delete user
             console.log((state))
             return state.filter(user=>user.age!==action.payload.age);
           
            // //  state.splice(action.payload)
            // console.log(state)
        }
    }
})


// export addNewUser action obj
export let {addNewUser,deleteUser}=userSlice.actions;
// export user slice level reducer

export const userReducer=userSlice.reducer;