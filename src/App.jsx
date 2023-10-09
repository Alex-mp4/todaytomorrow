//import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
//import { Link } from "react-router-dom";

function App() {


  return (
    <>
      <Nav />
      <div className='hero'>
        <div>
          <h1>Find outdoor furniture</h1>
          <h2>for any day</h2>
          <a href='./Catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span>&apos;s Items</button></a>
        </div>
        <div>
          <p>ONGOING&TRENDING</p>
        </div>
      </div>

      <div>
        <h3>Shop by category</h3>
        <div>Seating</div>
        <div>Tables</div>
        <div>Lighting</div>
        <div>Plants</div>
        <div>Shade</div>
      </div>

      <div>
        <p>OUR&DESIGN</p>
        <img></img>
      </div>

      <div>
        <p>Grid here</p>
      </div>

      <a href='./Catalogue'><button>Browse <span className='primaryColor'>Today</span>&apos;s <span className='accentColor'>&</span> <span className='darkColor'>Tomorrow</span>&apos;s Items</button></a>

      <Footer />
    </>
  )
}

export default App
