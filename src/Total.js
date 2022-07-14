import React from 'react'
import Cart from './routes/Cart';
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Total({ cart }) {
  return (
    <div>
        <h3 className="text-3xl font-bold text-center p-3">Total: {cart.reduce((a, b) => a + b, 0).toFixed(2)} $</h3>
    </div>
  )
}

