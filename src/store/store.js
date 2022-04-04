import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';

import spinnerReducer from '../reducers/spinnerSlice'
import counterReducer from '../reducers/counterSlice'
import formDataReducer from '../reducers/formDataSlice'
import LoginDataReducer from '../reducers/LoginDataSlice';

const rootReducer = combineReducers({
  spinner: spinnerReducer,
  formData: formDataReducer,
  loginData: LoginDataReducer,
  
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // reducer: {
  //   spinner: SpinnerReducer,
  // },
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})