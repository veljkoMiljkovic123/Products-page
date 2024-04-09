import React, { useEffect, useState } from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import LoadingPage from './LoadingPage';
//services
import ProductsService from '../services/productsService';
//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import Rating from '@mui/material/Rating';

function SingleProductPage() {
const[product,setProduct]=useState({})
const[currentImage,setCurrentImage]=useState(0)
const[isLoading,setIsLoading]=useState(false)

const[counter,setCounter]=useState(1)
//1. Kako uzeti id iz URL
let {id} = useParams()
console.log(id);
//2. Uzmi taj jedan proizvod
  useEffect(()=>{
    ProductsService.getSingleProduct(id)
    .then(res=>{
      setProduct(res.data)
      setIsLoading(true)
    })
    .catch(err=>console.log(err))
  },[])

  function handleCurrentImage(index){
    setCurrentImage(index)
  }
  function handleIncres(){
    if(counter<product.stock){
      setCounter(counter+1)
    }
  }

  function handleDecres(){
    if(counter>1){
      setCounter(counter-1)
    }
  }

  return (
    <div className='container mx-auto'>
    {isLoading?(   <div className='flex items-start justify-between gap-8'>
      <div className='flex flex-col gap-6 flex-1'>
        <img src={product.images[currentImage]} alt={product.title} 
        />
        <div className='flex gap-2'>
          {product.images.map((el,i)=>{
            return(
              <img src={el} key={i} className='w-[20%] border border-gray-600 object-contain' onClick={()=>handleCurrentImage(i)}
               />
            );
          })}
        </div>
      </div>
      <div className='content flex-1'>
        <div className='border border-black p-8'>
          <h3>{product.title}</h3>
          <h4>Price: $ {product.price}</h4>
          <p>Description: ${product.description}</p>
        </div>
        <div className='p-8 mt-8 flex flex-col gap-1'>
          <div  className='flex items-center gap-4'>
            Stock:{' '}
            {product.stock>0?( <p className='flex items-center gap-2 text-green-500'>
            In Stock: {product.stock}<FaCheck /> {' '}
             </p> 
              ) : (<p className='flex items-center gap-2 text-red-500'>Out of Stock {product.stock} <ImCross />
              </p>
              )}
          </div>
          <p>Brand: {product.brand}</p>
          <div className='flex items-center gap-1'>
            <p>Rating:</p>
            <Rating 
        name="half-rating-read" 
        defaultValue={product.rating}
         precision={0.5}
          readOnly />
          </div>
         <div className='flex items-center gap-3'>
          <p>Quantity:</p>
         <div className='flex items-center gap-2'>
            <button onClick={handleIncres} className='px-5 py-1 bg-slate-400'>+</button>
            <span className='px-5 py-1 bg-slate-400'>{counter}</span>
            <button onClick={handleDecres} className='px-5 py-1 bg-slate-400'>-</button>
          </div>
         </div>
        </div>
       
      </div>
    </div>):<LoadingPage />}
 
    </div>
  )
}

export default SingleProductPage