import React from "react";
import { Routes, Route, Link,  } from "react-router-dom";
import {Products} from './pages/Products';
import Header from "./components/Header";
import { Main } from "./pages/Main";
import Items from "./components/Items"



function App() {
  return (
<>
    <header>
      <a href="/">Главная</a>
      <a href="/products">Товары</a>
    </header>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/Products" element={<Products />}/>
    </Routes>
</>
  );
}

export default App;