import React from 'react'
import Header from '../components/Header'
import CheckoutForm from '../components/CheckoutForm'

export default function Checkout({cart, setCart}) {
  return (
    <> 
    <Header cart={cart} setCart={setCart} />
        Stripe incoming
        </>

  )
}
