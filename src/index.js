import ReactDOM from "react-dom";
import App from "./App"
import { Provider } from 'react-redux'
import { store } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
        {/* <App /> */}
    </Provider>
, document.getElementById('root'))