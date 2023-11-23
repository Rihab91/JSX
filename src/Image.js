import React from 'react'
import product from './product'

const Image = () => {
  return (
   <img src={product.image} alt="" className='product-img'/>
  )
}

export default Image