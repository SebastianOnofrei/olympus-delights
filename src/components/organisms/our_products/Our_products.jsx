import React from 'react';
import './Our_products.scss';
import banana_strawberry from "../../../assets/bananastrawberry.png";
import chocolate from "../../../assets/chocolate.png";
import peach from "../../../assets/peach.png";
import Product from '../../molecules/product/Product';

const Our_products = () => {
/********************
 *    MOCK DATA     *
 ********************/

/*********************************************************************************
 * I WILL IMPLEMENT THE PRODUCTS WITH A CMS - PRISMIC AFTER FINISHING THE DESIGN *
 *********************************************************************************/

const products = [
{
    imageURL: banana_strawberry,
    product_name: "Banana strawberry",
    price: 4.99,
},
{
    imageURL: chocolate,
    product_name: "Yogurt chocolate",
    price: 2.99,
},
{
    imageURL: peach,
    product_name: "Yogurt peach",
    price: 3.99,
},
];

	return (
		<main>
			<h3>Our Products</h3>
			<section className="our_products">
                {products.map(product=>{
            return(
                <Product product={product}/>
            )
         })}
            </section>
		</main>
	);
}

export default Our_products