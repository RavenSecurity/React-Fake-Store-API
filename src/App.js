import ProductList from "./components/ProductList"
import Filter from "./components/Filter"
import Header from "./components/Header";




import React, {useState, useEffect} from 'react'
import axios from 'axios'

import  { BrowserRouter, Link, Outlet, Switch } from "react-router-dom";

// TO DO :
// SORT BY PRICE
// Redesign the UI
// Responsive !
// Product page 

function App({cart, setCart}) { 



  const [posts, setPosts] = useState([])
  const [ogposts, setOgPosts] = useState([])


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
        console.log(res)
        setPosts(res.data)
        setOgPosts(res.data)
        
    })
    .catch(err => {
        console.log(err)
    })
}, [])

//   useEffect(() => {
//     if (category.length === 0) {
//       axios.get('https://fakestoreapi.com/products')
//       .then(res => {
//           setPosts(res.data)
//       })
//       .catch(err => {
//           console.log(err)
//       });
      
//   } else {
//     axios.get('https://fakestoreapi.com/products/category/' + category)
//   .then(res => {
//       setPosts(res.data)
//       console.log(posts)
//   })
//   .catch(err => {
//       console.log(err)
//   })
// }}, [category])


  return (
    <div className="App ">

      <Header cart={cart} setCart={setCart} />

      <div className="lg:flex">
        <Filter className=''  setPosts={setPosts} posts={posts} ogposts={ogposts} setOgPosts={setOgPosts}/>

        <ProductList className="" posts={posts} setCart={setCart} cart={cart}/>

        <Outlet />

      </div>
    </div>

  );
}

export default App;


  // Attempt to display several categories at once

  //   useEffect(() => {
  //     if (category.length == 0) {
  //       axios.get('https://fakestoreapi.com/products')
  //       .then(res => {
  //           setPosts(res.data)
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       });
        
  //   } else for (let index = 0; index < category.length; index++) {
  //     const element = category[index]; {
  //     axios.get('https://fakestoreapi.com/products/category/' + element)
  //   .then(res => {
  //       setPosts(res.data)
  //       console.log(posts)
  //   })
  //   .catch(err => {
  //       console.log(err)
  //   })}
  // }}, [category])
