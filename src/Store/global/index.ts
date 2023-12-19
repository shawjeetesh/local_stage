import { createSlice } from "@reduxjs/toolkit";




const slice = createSlice({
    name:"global",
    initialState:{
        count:0
    },
    reducers:{
        Increase:(state)=>{
            state.count++;
        }
    }
})




export const {
Increase
} = slice.actions


export default slice.reducer