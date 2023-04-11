import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter} from "react-router-dom"
import App from './App'
import './index.css'
import { store } from './JS/Store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
        <App />
  </Provider>
  </BrowserRouter>
  ,
)
