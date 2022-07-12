import Product from "./Product"
import Filter from "./Filter";
import Cart from "./Cart";

import React, {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
  
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState([])
  const [posts, setPosts] = useState([])

    useEffect(() => {
      if (!category) {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    } else {
      axios.get('https://fakestoreapi.com/products/category/' + category)
    .then(res => {
        setPosts(res.data)
    })
    .catch(err => {
        console.log(err)
    })}
 })



  return (
    <div className="App ">
      <header className="App-header bg-blue-200">
        <p className="text-3xl font-bold text-center p-3">
          Fake Store
        </p>

        <Cart cart={cart}/>
      </header>

      <div className="flex">
        <Filter className='' category={category} setCategory={setCategory}/>
        <Product className="" posts={posts} setCart={setCart} cart={cart}/>
      </div>
      
    </div>
  );
}

export default App;