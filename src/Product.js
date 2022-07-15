import React from 'react'

function Product({ posts, setCart, cart }) {
    

  return (
    <div className='Product'>
        <ul className='flex flex-wrap justify-center p-5'>
            {posts.map(post =>
                 <li className='p-3 flex' key={post.id}>
                    <img src={post.image}></img>
                    <h1 className='w-64 ml-2'>{post.title} </h1>
                        <h3>{post.price}$</h3>
                    <button className='Add flex bg-orange-300 h-9 w-30 rounded-xl p-3 text-center align-middle' onClick={() => {
                        setCart(prevArray => [...prevArray, post.price]); console.log(cart)}}>
                            Add to cart</button>
                  </li>)}
        </ul>
    </div>
  )
}

export default Product