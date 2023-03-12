import React,{useState} from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/cart";
import { Checkout } from "./components/checkout"; 
import { ShopContextProvider } from "./components/shop-context";


function App() {
  
  return (
    <div className="App">
        <ShopContextProvider>
     <Router>
       <Navbar/>
      <Routes>
   <Route path='/ecom' element={<Shop/>} />
    <Route path='/cart' element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout />} />

      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
