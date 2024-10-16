import React from "react";
import { Routes, Route, Link,  } from "react-router-dom";
import {Products} from './pages/Products';
import Header from "./components/Header";
import { Main } from "./pages/Main";
import Items from "./components/Items"



function App() {
  return (
<>
    <div className="wrapper">
    <header className="header">
     
      <div className="nav">
      <Link to="/"> <span className="logo"><img src="/logo.png"></img></span></Link>
      <Link to="/products">Продукты</Link>
      </div>
    </header>
    <Routes>
      <Route path="/Products" element={<Products />}/>
      <Route path="/" element={<Main />}/>
    </Routes>
    </div>
</>
  );
}

export default App;