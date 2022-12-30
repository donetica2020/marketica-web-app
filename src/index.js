import './index.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import NavBar from './components/navbar/navbar';
import Home from "./pages/home/home";
import Aboutus from "./pages/aboutus/aboutus";
import Donate from "./pages/donateus/donate";
import Contactus from "./pages/contactus/contactus";

import {
  Route, Routes, BrowserRouter
} from "react-router-dom";


function AppRoutes() {

  const [current_route,set_current_route] = useState('home')

  return (
    <>
      <NavBar current_route={current_route} />
      <Routes>
        <Route path='/' element={<Home set_current_route={set_current_route} />} />
        <Route path='/about' element={<Aboutus  set_current_route={set_current_route} />} />
        <Route path='/donate' element={<Donate  set_current_route={set_current_route} />} />
        <Route path='/contact' element={<Contactus  set_current_route={set_current_route} />} />
      </Routes>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

