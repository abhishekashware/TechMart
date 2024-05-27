import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store.js'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ToastContainer
        position='top-right'
        autoClose={5000}
        closeOnClick
        pauseOnHover
        theme='dark'
        />
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
)
