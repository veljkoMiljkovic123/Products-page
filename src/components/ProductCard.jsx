import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
    <div className='w-[300px] h-[300px] border-2 border-blue-400'>
        <img className='h-[150px] w-full object-cover' src={product.thumbnail} alt={product.title} />
        <div className='flex flex-col item-center gap-3 mt-3'>
            <h3 className='text-center text-2xl text-blue-400'>{product.title}</h3>
            <p className='text-center text-2xl text-blue-400'>${product.price}</p>
            <Link to={`/singleProduct/${product.id}`}>Show more</Link>
        </div>
    </div>
  )
}

export default ProductCard