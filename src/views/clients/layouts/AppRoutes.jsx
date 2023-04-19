import React from 'react'

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Home';
import About from '../About';
import ContactUs from '../ContactUs';
import Products from '../Products';
import Login from '../auth/Login';
export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            render={(props) => <Home {...props} />}
          />
          <Route
            path="/about-us"
            element={<About />}
            render={(props) => <About {...props} />}
          />
          <Route
            path="/products"
            element={<Products />}
            render={(props) => <Products {...props} />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs />}
            render={(props) => <ContactUs {...props} />}
          />
          <Route path="/login" exact render={(props) => <Login {...props} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
