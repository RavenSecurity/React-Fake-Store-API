import React from 'react'

function ProductList({ posts, setCart, cart }) {

  const handleAddProduct = product => {
    const ProductExist = cart.find(item => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        ));
    } else {
      setCart([...cart, { 
        ...product, 
        'quantity': 1
      }]);
    }
    console.log(cart)
  };
  

  return (
    <div className='Product w-full'>
        <ul className=' flex-wrap justify-center p-5'>
            {posts.map(post =>
                 <li className='p-3  flex justify-around text-slate-900' key={post.id}>
                    <img src={post.image}></img>
                    <h1 className='w-auto ml-2 text-slate-900'>{post.title} </h1>
                        <h3>{post.price}$</h3>

                    <button className='Add flex bg-orange-300 h-9 w-30 rounded-xl p-3 text-center text-white font-bold align-middle'
                    onClick={() => handleAddProduct(post)}>
                            Add to cart</button>

                  </li>)}
        </ul>
    </div>
  )
}

export default ProductList