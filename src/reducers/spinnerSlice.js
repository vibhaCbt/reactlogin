import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
}

export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,
    reducers:{
        setSpinner:(state, action) =>{
            state.loading = action.payload
            //console.log(action)
        }
    }

})

export const { setSpinner } = spinnerSlice.actions
export default spinnerSlice.reducer