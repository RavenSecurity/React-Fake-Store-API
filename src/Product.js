import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Product() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div className='Product'>
        <ul className='flex flex-wrap justify-center p-5'>
            {posts.map(post =>
                 <li className='p-3 flex' key={post.id}>
                    <img src={post.image}></img>
                    <h1 className='w-64 ml-5'>{post.title} </h1>
                        <h3>{post.price}$</h3>
                  </li>)}
        </ul>
    </div>
  )
}

export default Product