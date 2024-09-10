import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    num : false,
    cha : false,
    len : 8,
    passw : ''
}

export let passSlice = createSlice({
    name : 'create',
    initialState,
    reducers : {

        num : (state)=>{
            state.num = !state.num
        },

        cha : (state)=>{
            state.cha = !state.cha
        },

        len : (state,action)=>{
            state.len = action.payload
        },

        passw : (state,action)=>{
            state.passw = action.payload
        }
    }
})

export let {num,len,passw,cha} = passSlice.actions;

export default passSlice.reducer;