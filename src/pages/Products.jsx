import React, { useEffect, useState } from 'react'
import useProducts from '../hooks/useProducts'
import { data } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'
import { useLocation } from 'react-router-dom'

export default function About() {
    const { products, loading, setLoading, setProducts } = useProducts()
    const [page, setpage] = useState(1)
    const limit = 22;
    const skip = (page - 1) * limit
    async function fetchdata() {
        setLoading(true)
        let response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        let data = await response.json()
        setProducts(data.products)
        setLoading(false)
    }
    useEffect(() => {
        fetchdata()
    }, [page])

    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        },[pathname])
    })

    if (loading) return <Spinner />
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-3.5'>
                {
                    products.map((prod, index) => {
                        return (
                            <ProductCard key={index} id={prod.id} product={prod} />
                        )
                    })
                }
            </div>
            <div className='max-w-[300px] mx-auto my-3 flex gap-3'>
                <button className='px-6 py-2 border cursor-pointer' onClick={()=>setpage(page-1)}>Prev</button>
                <button className='px-6 py-2 border cursor-pointer' onClick={()=>setpage(page+1)}>Next</button>
            </div>
        </>

    )
}
