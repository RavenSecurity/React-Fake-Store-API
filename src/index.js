import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Cart from './routes/Cart'
import Checkout from './routes/Checkout';
import FourOFour from './routes/FourOFour';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  
  const [cart, setCart] = useState([])

  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App cart={cart} setCart={setCart} />}/>
      <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>} />
      <Route path="checkout" element={<Checkout cart={cart} setCart={setCart}/>} />
      
      {/* Import Page 404 error */}
      <Route path="*"element={<FourOFour cart={cart}/>} />
    </Routes>
  </BrowserRouter>

)}

root.render(
  <Index />
);