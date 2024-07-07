import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:localStorage.getItem("userDetails")?JSON.parse(localStorage.getItem("userDetails")):{},
    list_role:[],
    userLogin:localStorage.getItem("userLogin") || false,
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        LOGIN:(state,action)=>{
            localStorage.setItem("userDetails",JSON.stringify(action.payload))
            localStorage.setItem("userLogin",true)
            state.userLogin=true
            state.userDetails=action.payload
        },
        LOGOUT:(state,action)=>{
            localStorage.removeItem("userDetails")
            localStorage.removeItem("userLogin")
            state.userLogin=false
            state.userDetails={}
        },
        LIST_ROLE:(state,action)=>{
            state.list_role=action.payload
        }
    }
})


export const {LOGIN,LOGOUT,LIST_ROLE} = authSlice.actions

export default authSlice.reducer
