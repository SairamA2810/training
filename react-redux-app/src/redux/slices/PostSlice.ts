import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// type for api data
export type PostType={
    userId:number;
    id:number;
    title:string;
    body:string;
}

// type for slice
export type PostsSliceType={
    posts:PostType[];
    error:string;
    status:string;
}

// inital value
const postsInitialState={
    posts:[],
    error:"",
    status:""
}

// make APi req
export const postsPromiseLifeCycle=createAsyncThunk('posts',async(url:string,thunkApi)=>{
    try{
        let res= await fetch(url);

        if(res.status===200){
            let postsData=await res.json()
            return postsData;
        }
        else{
            return thunkApi.rejectWithValue(res.statusText);
        }
    }catch (err){
        console.log(err)
        return thunkApi.rejectWithValue(err)
    }
})

// slice
export const postsSlice=createSlice({
    name:"posts",
    initialState:postsInitialState,
    reducers:{},
    extraReducers:(builder)=>{     //builder is used to deals with promises

        builder.addCase(postsPromiseLifeCycle.pending,(state,action)=>{
            state.status="pending"
            

        })

        builder.addCase(postsPromiseLifeCycle.fulfilled,(state,action)=>{
            state.status="success";
            state.posts=action.payload;
            state.error=""
        })

        builder.addCase(postsPromiseLifeCycle.rejected,(state,action)=>{
            console.log(action.payload)
            state.status="rejected";
            state.posts=[];
            // state.error=action.payload
        })
    }   
})



export const postReducer=postsSlice.reducer;