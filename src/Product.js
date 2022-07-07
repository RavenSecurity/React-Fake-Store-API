import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Product() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div className=''>
        <ul className='bg-red-300 flex p-5 flex-wrap'>
            {posts.map(post =>
                 <li className='p-3' key={post.id}>{post.title} {post.price}
                  <img src={post.image} height="" width="200"></img>
                  </li>)}
        </ul>
    </div>
  )
}

export default Product