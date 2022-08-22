import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Filter({ category, setCategory }) {

  const [categories, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

// function
// function addCategory(name) {
//   setCategory([...category, name])
// }

  return (
    <div className='Filter p-10 pr-0'>
        <p className='mb-3 text-slate-900'>Categories</p>
        <hr className='w-auto'></hr>
        <ul className='flex lg:flex-col'>
        {categories.map(post =>
         <li className='p-3 flex text-slate-900' key={post.id}>
          <input id={post.id} type="radio"  name="choice" onChange={() => {
                        setCategory(post); console.log(category)}}></input>
          <label for={post.id} className='ml-3 text-slate-900'>{post}</label>
        </li>)}
        </ul>
    </div>
  )
}