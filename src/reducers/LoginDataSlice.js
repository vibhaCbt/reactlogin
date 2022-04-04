import { createSlice } from "@reduxjs/toolkit";

export const LoginDataSlice = createSlice({
    name: 'loginData',
    initialState: {
        logData: '',
    },
    reducers:{
        addLoginData: (state, {payload}) =>{
            state.logData = payload
        },
        logoutUser: (state, {payload}) =>{
            state.logData = ''
        }
    }
})

export const {addLoginData, logoutUser} = LoginDataSlice.actions
export default LoginDataSlice.reducer
export const myLoginData = state => state.loginData.logData