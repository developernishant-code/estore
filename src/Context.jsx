import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
const Storecontext = createContext()

export default function Context({ children }) {
    const [products, setProducts] = useState([])
    const [cart,setcart] = useState([])
    const [page, setpage] = useState(1)
    const limit = 48;
    const skip = (page - 1) * limit
    async function fetchdata() {
        let response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        setProducts(response.data.products)
    }
    useEffect(()=>{
        fetchdata()
    },[])
    function addtoCart(id){
        const item=products.find((prod)=>prod.id===id);
        const productincart=cart.find((prod)=>prod.id==id);
        if(productincart){
            const updatedcart=cart.map((cp)=>{
                return cp.id==id?{...cp,qty:cp.qty+1}:cp;
            });
            setcart(updatedcart)
        }else{
            setcart([...cart,{...item,qty:1}])
        }
    }
    function removeitem(id){
        const updatecdcart=cart.filter((prod)=>prod.id!=id)
        setcart(updatecdcart)
    }

    function qtyhandler(id,flag){
        let updatedcart=[]
        if(flag==="inc"){
            updatedcart=cart.map((cp)=>{
                return cp.id==id ? {...cp,qty : cp.qty + 1}:cp;
            })
        }else{
            updatedcart=cart.map((cp)=>{
                return cp.id==id?{...cp,qty:cp.qty - 1}:cp;
            })
        }
        setcart(updatedcart)
    }
    return (
        <Storecontext.Provider value={{addtoCart,cart,removeitem,qtyhandler}}>
            {children}
        </Storecontext.Provider>
    )
}

export {Storecontext}