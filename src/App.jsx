import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import UpdateProduct from './UpdateProduct'
import UpdateProfile from './UpdateProfile'
import CustomOrder from './CustomOrder'
export default function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/customer' element={<Home />}/>
      <Route path='/customer/register' element={<Register user="customer" />}/>
      <Route path='/customer/login' element={<Login />}/>
      <Route path='/customer/cart' element={<Cart />}/>
      <Route path='/customer/wishlist' element={<WishList />}/>
      <Route path='/retailer' element={<Dashboard />}/>
      <Route path='/retailer/register' element={<Register user="retailer" />}/>
      <Route path='/retailer/addProducts' element={<AddProducts />}/>
      <Route path='/retailer/updateProducts' element={<UpdateProduct />}/>
      <Route path='/customer/customOrder' element={<CustomOrder />}/>
      <Route path='/updateProfile' element={<UpdateProfile userType="customer" />} />
    </Routes>
    </>
  )
}


