import React from 'react';
import { Link } from 'react-router-dom';
import Total from '../Total';

function Cart({ cart, setCart }) {

  console.log(cart)
    return (
        <>
        <header className="App-header bg-slate-900 flex justify-around">
        <p className="text-3xl font-bold text-center p-3"></p>
        <p className="text-3xl font-bold text-center p-3 text-white">
        <Link to="/">Web Store</Link>
        </p>
        
        <Link to="/cart"> <Total cart={cart} />{" "} </Link>
      </header>

      <div className='Product'>
        <ul className=' flex-wrap justify-center p-5'>
            {cart.map(cart =>
                 <li className='p-3  flex text-slate-900' key={cart.id}>
                    <img src={cart.image}></img>
                    <h1 className='w-auto ml-2 text-slate-900'>{cart.title} </h1>
                        <h3>{cart.price}$</h3>
                    <button className='Add flex bg-orange-300 h-9 w-30 rounded-xl p-3 text-center text-white font-bold align-middle' onClick={() => {
                        setCart(prevArray => [...prevArray, cart.price]); console.log(cart)}}>
                            Add to cart</button>
                  </li>)}
        </ul>
    </div>
        </>
        
    );
}

export default Cart;