import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Register from './components/Login/Register.jsx';
import Login from './components/Login/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="/homepage" element={<App />} />
          <Route path="/register" element={<Register />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
