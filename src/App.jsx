import React from "react";
import { Routes, Route, Link, BrowserRouter,  } from "react-router-dom";
import {Products} from './pages/Products';
import Header from "./components/Header";
import { Main } from "./pages/Main";
import Items from "./components/Items"
import Footer from "./components/Footer"




function App() {
  return (
<>
    <div className="wrapper">
    <Header />
    <Footer />
    </div>

</>
  );
}

export default App;