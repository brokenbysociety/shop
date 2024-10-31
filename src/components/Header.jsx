import React, { Component } from 'react'
import {Routes, Route, Link, Router} from 'react-router-dom'
import { Products } from '../pages/Products'
import { Main } from '../pages/Main'

const Header = (props) => {
    return (
      <>
      <header className="header">
     
     <div className="nav">
     <Link to="/"> <span className="logo"><img src="/logo.png"></img></span></Link>
     <Link to="/products">Products</Link>
     </div>
   </header>
   <Routes>
     <Route path="/Products" element={<Products />}/>
     <Route path="/" element={<Main />}/>
   </Routes>
        </>
        
    )
  }

  export default Header
