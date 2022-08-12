import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Cart from './routes/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<Cart />} />

      {/* Import Page 404 error */}
      <Route path="*"element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
    </Routes>
  </BrowserRouter>
);