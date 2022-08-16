import React, { useMemo } from 'react'


export default function Total({ cart }) {

  const totalPrice = useMemo(() => {
    if (!cart.length) {
      return 0;
    }
    return cart.reduce((a, b) => a + b, 0).toFixed(2);
  }, [cart]);

  return (
    <div>
        <h3 className="text-3xl font-bold text-center p-3 text-orange-300">Total: {totalPrice} $</h3>
    </div>
  )
} 

// {cart.reduce((a, b) => a + b, 0).toFixed(2)}