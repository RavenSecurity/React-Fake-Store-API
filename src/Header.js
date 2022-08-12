import React from 'react'
import  { Link, Outlet } from "react-router-dom";
import Total from "./Total";

export default function Header() {
  return (
    <div>
        <header className="App-header bg-blue-200 flex justify-around">
        <p className="text-3xl font-bold text-center p-3"></p>
        <p className="text-3xl font-bold text-center p-3">
          Fake Store
        </p>

        <Link to="/cart"> <Total cart={cart} /> </Link>
      </header>
    </div>
  )
}