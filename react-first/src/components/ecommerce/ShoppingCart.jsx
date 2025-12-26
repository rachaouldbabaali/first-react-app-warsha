import React from 'react'

function ShoppingCart({cartItems, onClear}) {
  return (
    <div>
      <ul>
        {
            cartItems.map(item => (
                <li key={item}>{item} </li>
            )
                
            )
        }
      </ul>
      <button onClick={onClear} >Clear</button>
    </div>
  )
}

export default ShoppingCart
