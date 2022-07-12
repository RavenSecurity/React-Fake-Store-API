import React from 'react'

function Product({ posts, setCart, cart }) {
    

  return (
    <div className='Product'>
        <ul className='flex flex-wrap justify-center p-5'>
            {posts.map(post =>
                 <li className='p-3 flex' key={post.id}>
                    <img src={post.image}></img>
                    <h1 className='w-64 ml-5'>{post.title} </h1>
                        <h3>{post.price}$</h3>
                    <button className='Add bg-slate-300 h-9' onClick={() => {
                        setCart(post.price); console.log(cart)}}>
                            Add</button>
                  </li>)}
        </ul>
    </div>
  )
}

export default Product