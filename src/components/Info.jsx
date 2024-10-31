import React, { Component } from 'react'
import {Routes, Route, Link, Router} from 'react-router-dom'
import { Products } from '../pages/Products'
import { Main } from '../pages/Main'

const info = (props) => {
    return (
        <>
        
        <p className="main_header">"Clothes" shop</p>
        
        <img src="./img/main.jpg" alt=""  className="main_picture"/>

        <p className="main_text">The Clothes clothing store is a unique space where style meets quality. We offer a wide range of fashionable clothing for men, women and children, reflecting the latest trends in world fashion. Our team of professional stylists carefully selects every element of the collection to satisfy even the most sophisticated tastes.</p>

        </>
        
    )
  }

  export default info
