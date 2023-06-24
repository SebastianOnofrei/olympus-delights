import React from 'react'
import './Product.scss';
import Product_img from '../../atoms/product_img/Product_img';
import Button from '../../atoms/button/Button';
const Product = (props) => {

  return (
    <div className='product'>
         <Product_img source={props.product.imageURL} product_name={props.product.product_name}/>
         <h5>{props.product.product_name}</h5>
         <p className='price'>LEI {props.product.price}</p>
         <Button text='Buy Now' />
    </div>
  )
}

export default Product