import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
export default function CustomRoutes() {
  return (
        <CartProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
        </CartProvider>
  )
}
