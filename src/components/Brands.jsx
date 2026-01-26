import React from 'react'

export default function Brands({name,image,key}) {
  return (
    <div key={key} className='max-w-[100px]'>
        <img src={image} className='w-[70px] object-cover' alt="" />
        
    </div>
  )
}





