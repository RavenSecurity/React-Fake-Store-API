import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

// TO DO :
// Address & Billing Page
// Implement https://stripe.com/en-gb-be system
// Confirmation Page
// Thank you Page

function Cart({ cart, setCart }) {
  
  return (
    <>
      <Header cart={cart} />

      <div className="Product w-full">
        <ul className=" flex-wrap justify-evenly p-5 m-5">
          {cart.map((cart) => (
            // Quan d
            <li
              className="p-3 flex text-slate-900 justify-around"
              key={cart.id}
            >
              <div className='w-1/5'>
              <img src={cart.image}></img>
              </div>

              <h1 className="w-2/5 ml-2 text-slate-900">{cart.title} </h1>

              <div className='w-1/5'>

              <h3 className='w-1/5'>{cart.price}$</h3>
              {/* <button onClick={()}>-</button> */}
              <h3>Qty: {cart.quantity}</h3>
              {/* <button onClick={()}>+</button> */}
              </div>

              

              <button
                className="Add flex bg-red-400 h-9 w-30 rounded-xl p-3 text-center text-white font-bold align-middle"
                onClick={() => {
                  setCart((products) =>
                    products.filter(del => del.id !== cart.id)
                    // (_, index) => index !== 0
                  );
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <p className="text-center">
          The total is{" "}
          {cart
            .map((a) => a.price * a.quantity)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}{" "}
          $
        </p>
      </div>
    </>
  );
}

export default Cart;