import React from 'react'
import Header from '../components/Header'

export default function Checkout({cart, setCart}) {
  return (
    <div> 
    <Header cart={cart} setCart={setCart} />
        Stripe incoming </div>
  )
}
