import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <div>Product</div>
      <button className='btn btn-secondary'>
        <Link to='/products/gents' style={{color:'white'}}>Gents</Link>
      </button>
      <button className='btn btn-secondary'>
        <Link to='/products/ladies' style={{color:'white'}}>Ladies</Link>
      </button>
      <Outlet/>
    </div>
  )
}

export default Products
