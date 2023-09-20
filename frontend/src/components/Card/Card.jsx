import React from 'react'
import './Card.css'

function Card({data2}) {
  return (
    <div>
    <h1>Your Cart</h1>
<div className='card-container'>
          <div className='card-pay'>
          <p className='name-products'> {data2.name}</p>
          <p className='name-products'>description:{data2.description} </p>
          <p className='name-products'>price:{data2.price}$</p>
          <p className='price-product'>Success</p>

        </div>
        
      
    
    </div>
    </div>
    )}


export default Card