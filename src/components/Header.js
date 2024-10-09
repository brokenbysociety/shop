import React, { Component } from 'react'
import {Routes, Route, Link, Router} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
      <header>
        <a href="/main">Главная</a>
        <a href="/products">Товары</a>
      </header>
        <Routes>
          <Route path="/" element= {<main />}/>
          <Route path="/products" element= {<products />}/>
        </Routes>
        </>
        
    )
  }
}
