import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/Not-found'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  const allrouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        
        {
          path: "productdetail/:id",
          element: <ProductDetail />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "products/:slug?",
          element: <Products />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return (
    <RouterProvider router={allrouter} />
  )
}

export default App