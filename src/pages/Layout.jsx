import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrolltoTop from '../components/ScrolltoTop'


export default function Layout() {
  return (
    <div>
        <ScrolltoTop />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
