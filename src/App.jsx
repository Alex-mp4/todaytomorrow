//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Landingpage from './pages/Landingpage'
import Catalogue from './pages/Catalogue'
import Cart from './pages/Cart'
import Product from './pages/Product'

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
