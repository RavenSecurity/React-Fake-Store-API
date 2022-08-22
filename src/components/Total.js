import React, { useMemo } from 'react'
import { ReactComponent as YourSvg } from '../assets/cart.svg';


export default function Total({ cart }) {



  return (
    <div>
        <h3 className="text-3xl font-bold  p-3 text-orange-300 flex">
        <YourSvg className=''/>
          {cart.length}</h3>
    </div>
  )
} 

