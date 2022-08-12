import React from 'react';
import { Link } from 'react-router-dom';
import Total from '../Total';

function Cart({ cart }) {
    return (
        <>
        <header className="App-header bg-blue-200 flex justify-around">
        <p className="text-3xl font-bold text-center p-3"></p>
        <p className="text-3xl font-bold text-center p-3">
          Fake Store
        </p>
        <p>{cart}$</p>

        <Link to="/cart"> 
        <Total cart={cart} /> 
        </Link>
        
      </header>
      <h1>this is the cart page</h1>
        </>
        
    );
}

export default Cart;