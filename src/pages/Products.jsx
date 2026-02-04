import React, { useEffect, useState } from 'react'
import useProducts from '../hooks/useProducts'
import { data, Link, useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Spinner from '../components/Spinner'
import { useLocation } from 'react-router-dom'
import { categorydata } from '../Api-data/CategoryApi'
import ProductsPageSkeleton from '../Skeletons/ProductSkeleton'


export default function About() {
    const { products, loading, setLoading, setProducts } = useProducts()
    
    const category = categorydata
    const [page, setpage] = useState(1)
    const { slug } = useParams()
    const limit = 48;
    const skip = (page - 1) * limit
    const isCategoryPage = Boolean(slug);
    // console.log("slug=", slug)

    async function fetchdata() {
        let API = ""

        if (slug) {
            API = `https://dummyjson.com/products/category/${slug}?limit=${limit}&skip=${skip}`
        } else {
            API = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        }
        setLoading(true)



        let response = await fetch(API)
        let data = await response.json()

        setProducts(data.products)
        setLoading(false)
    }

    useEffect(() => {
        fetchdata()
    }, [slug, page])
    // console.log(category)

    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        }, [pathname])
    })

    if (loading) return <ProductsPageSkeleton/>
    return (
        <>
            <div className='max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4'>

                <div className="col-span-1 lg:col-span-1">

                    {/* MOBILE CATEGORY STRIP */}
                    <div className="lg:hidden overflow-x-auto">
                        <ul className="grid grid-rows-2 grid-flow-col gap-4 py-3 px-2 w-max">
                            {category.map((item, index) => (
                                <Link to={`/products/${item.slug}`} key={index}>
                                    <div className="w-[90px] flex flex-col items-center">
                                        <img
                                            src={item.image}
                                            className="w-[70px] h-[70px] rounded-full object-cover"
                                            alt=""
                                        />
                                        <p className="text-xs text-center mt-1 font-medium">
                                            {item.name}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* DESKTOP SIDEBAR */}
                    <div className="hidden lg:flex lg:flex-col">
                        {category.map((item, index) => (
                            <Link to={`/products/${item.slug}`} key={index}>
                                <div className="w-[100px] cursor-pointer mx-auto py-3">
                                    <img
                                        src={item.image}
                                        className="rounded-2xl"
                                        alt=""
                                    />
                                    <h5 className="text-center font-bold">
                                        {item.name}
                                    </h5>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>


                <div className='col-span-5'>
                    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-3.5'>
                        {products.map((prod) => (
                            <ProductCard key={prod.id} id={prod.id} product={prod} />
                        ))}
                    </div>

                    {!isCategoryPage && (
                        <div className='max-w-[300px] mx-auto my-3 flex gap-3'>
                            <button
                                className='px-6 py-2 border'
                                onClick={() => setpage(page - 1)}
                            >
                                Prev
                            </button>
                            <button
                                className='px-6 py-2 border'
                                onClick={() => setpage(page + 1)}
                            >
                                Next
                            </button>
                        </div>
                    )}

                </div>

            </div>


        </>

    )
}
