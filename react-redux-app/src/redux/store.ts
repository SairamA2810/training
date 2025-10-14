import {configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux/slices/CounterSlice";
import { userReducer } from './slices/UserSlice';
import { postReducer } from './slices/PostSlice';


// create a redux store and 
export const store=configureStore({
    reducer:{
        counterState:counterReducer,
        userState : userReducer,
        postState: postReducer
    }
});

// type of the store
export type RootState = ReturnType<typeof store.getState>
export type DispatchType=typeof store.dispatch
 
 