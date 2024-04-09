import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productsService'
import LoadingPage from './LoadingPage'
import ProductCard from '../components/ProductCard'

function ProductsPage() {
    const[allData,setAllData]=useState([])
    const[isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        ProductsService.getAllProducts()
        .then(res=>{
            setAllData(res.data.products)
            setIsLoading(true)
        })
        .catch(err=>console.log(err))
    },[])


  return (
    <div className='container mx-auto'>
        {isLoading?(
            <div className='flex flex-wrap gap-[20px]'>
                {allData.map((el,i)=>(
                    <ProductCard key={i} product={el} />
                ))}
            </div>
        ):<LoadingPage />}
    </div>
  )
}

export default ProductsPage