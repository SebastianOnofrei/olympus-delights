import React from 'react' 
import './Product_img.scss'

const Product_img = (props) => {
  return (
    <img src={props.source} alt={props.product_name} className='product__img'/>
  )
}

export default Product_img