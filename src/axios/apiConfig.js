import axios from "axios";
import { setSpinner } from "../reducers/spinnerSlice";
import { store } from "../store/store";

export const apiConfig = axios.create(
  {
  baseURL: 'https://fakestoreapi.com',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
})

// For GET requests
apiConfig.interceptors.request.use(
(req) => {
  // Add configurations here
  console.log('request send')
  store.dispatch(setSpinner(true))
  return req;
},
  (err) => {
    return Promise.reject(err);
  }
);

// For POST requests
apiConfig.interceptors.response.use(
  (res) => {
    // Add configurations here
    //  if (res.status === 201) {
    //     console.log('Posted Successfully');
    //  }
    console.log('Posted Successfully');
    store.dispatch(setSpinner(false))
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);