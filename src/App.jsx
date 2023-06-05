import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Cart from './Cart'
import WishList from './WishList'
import Dashboard from './Dashboard'
import SellerSettings from './SellerSettings'
import Register from './Register'
import AddProducts from './AddProducts'
export default function App() {

  return (
    <>
    {/* <Home />     */}
    <Login />
    {/* <Cart /> */}
    {/* <WishList /> */}
    {/* < Dashboard /> */}
    {/* <SellerSettings /> */}
    {/* <Register user="retailer"/> */}
    <AddProducts />
    </>
  )
}


