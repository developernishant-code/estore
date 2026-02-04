import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
const Storecontext = createContext()

export default function Context({ children }) {
    const [products, setProducts] = useState([])
    const [cart, setcart] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const limit = 48;
    const skip = (page - 1) * limit
    async function fetchdata() {
        let response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        setProducts(response.data.products)
        setloading(false)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    function addtoCart(product) {
        if (!product || !product.id) return;

        const productincart = cart.find(
            (item) => item.id === product.id
        );

        if (productincart) {
            const updatedcart = cart.map((cp) =>
                cp.id === product.id
                    ? { ...cp, qty: cp.qty + 1 }
                    : cp
            );
            setcart(updatedcart);
        } else {
            setcart([...cart, { ...product, qty: 1 }]);
        }
    }
    function removeitem(id) {
        const updatecdcart = cart.filter((prod) => prod.id != id)
        setcart(updatecdcart)
    }

    function qtyhandler(id, flag) {
        let updatedcart = cart.map((cp) => {
            if (cp.id === id) {
                if (flag === "inc") {
                    return { ...cp, qty: cp.qty + 1 };
                } else {
                    return { ...cp, qty: cp.qty > 1 ? cp.qty - 1 : 1 };
                }
            }
            return cp;
        });

        setcart(updatedcart);
    }
    return (
        <Storecontext.Provider value={{ addtoCart, cart, removeitem, qtyhandler, loading }}>
            {children}
        </Storecontext.Provider>
    )
}

export { Storecontext }