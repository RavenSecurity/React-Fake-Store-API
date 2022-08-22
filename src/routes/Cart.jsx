import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

// TO DO :
// Quantity in cart 
// Address & Billing Page
// Confirmation Page
// Thank you Page

function Cart({ cart, setCart }) {

    return (
        <>
        <Header cart={cart} />

      <div className='Product w-auto'>
        <ul className=' flex-wrap justify-evenly p-5 m-5'>
            {cart.map(cart =>
                 <li className='p-3 flex text-slate-900 justify-evenly' key={cart.id}>
                    <img src={cart.image}></img>
                    <h1 className='w-auto ml-2 text-slate-900'>{cart.title} </h1>
                        <h3>{cart.price}$</h3>
                    <button className='Add flex bg-red-400 h-9 w-30 rounded-xl p-3 text-center text-white font-bold align-middle' onClick={() => {
                        setCart((products) => products.filter((_, index) => index !== 0))}}>
                            Remove</button>
                  </li>)}
        </ul>

        <p className='text-center'>The total is {cart.map(a => a.price).reduce((a, b) => a + b, 0).toFixed(2)} $</p>

    </div>
    
        </>
        
    );
}

export default Cart;

  // const totalPrice = useMemo(() => {
  //   if (!cart.length) {
  //     return 0;
  //   }
  //   return cart[price].reduce((a, b) => a + b, 0).toFixed(2);
  // }, [cart]);

  // {cart.reduce((a, b) => a + b, 0).toFixed(2)}

 