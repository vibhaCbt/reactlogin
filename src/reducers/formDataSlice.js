import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
        data: [],
    },
    reducers:{
        setFormData: (state, {payload}) =>{
            state.data = [...state.data, payload]           
        },
    }
})

export const {setFormData} = formDataSlice.actions
export default formDataSlice.reducer

export const myData = state => state.formData.data