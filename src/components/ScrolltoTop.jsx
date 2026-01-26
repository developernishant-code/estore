import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrolltoTop() {
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        },[pathname])
    })
  return null
}
