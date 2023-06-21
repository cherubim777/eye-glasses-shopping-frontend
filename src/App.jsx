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
import AllProducts from './AllProducts'
import ProductDetails from './ProductDetails'
import Checkout from './Checkout'
import RetailerProducts from './RetailerProducts'
import PasswordReset from './PasswordReset'
import RetailerOrders from './RetailerOrders'
import CustomerOrders from './CustomerOrders'
import SubmitReview from './SubmitReview'

export default function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/resetPassword' element={<PasswordReset />} />
      <Route path='/review' element={<SubmitReview/>}/>

      <Route path='/customer/register' element={<Register user="customer" />}/>
      <Route path='/customer/cart' element={<Cart />}/>
      <Route path='/customer/orders' element={<CustomerOrders />}/>
      <Route path='/customer/wishlist' element={<WishList />}/>
      <Route path='/customer/customOrder' element={<CustomOrder />}/>
      <Route path='/customer/products' element={<AllProducts />} />
      <Route path='/customer/productDetails/:id' element={<ProductDetails />} />
      <Route path='/customer/checkout' element={<Checkout />} />
      <Route path='/customer/updateProfile' element={<UpdateProfile />} />

      <Route path='/retailer' element={<Dashboard />}/>
      <Route path='/retailer/register' element={<Register user="retailer" />}/>
      <Route path='/retailer/addProduct' element={<AddProducts />}/>
      <Route path='/retailer/products'  element={<RetailerProducts /> }/>
      <Route path='/retailer/updateProduct' element={<UpdateProduct />}/>
      <Route path='/retailer/settings' element={<SellerSettings />}/>
      <Route path='/retailer/orders' element={<RetailerOrders />} />
    </Routes>
    </>
  )
}


