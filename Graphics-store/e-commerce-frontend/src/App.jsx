import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Flex from './components/navbar/Flex'
import Product from './components/navbar/Product'
import Carousel from './components/carousel/Carousel'
import Design from './pages/Design'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashboard from './admin/AdminDashboard'
import AddProduct from './admin/AddProduct'
import AdminProductList from './admin/AdminProductList'
// import Dashboard from './pages/Dashboard'
// ...existing code...
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/Home'


function App() {
  return (
    <>
      <ToastContainer />
      <style>{`
        html, body {
          height: 100%;
        }
      `}</style>






      <Routes>
        <Route path="/" element={ <><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><AboutUs /></>} />
        <Route path="/design" element={<><Navbar /><Design /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/admin/dashboard" element={
          <AdminDashboard />
        } />
        <Route path="/admin/product" element={
          <AdminDashboard>
            <AddProduct />
          </AdminDashboard>
        } />
        <Route path="/admin/list-product" element={
          <AdminDashboard>
            <AdminProductList />
          </AdminDashboard>
        } />
      </Routes>
    </>
  )
}

export default App
