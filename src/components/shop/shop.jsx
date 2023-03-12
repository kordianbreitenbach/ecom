import React from 'react'
import '../../App.css';
import { PRODUCTS } from '../products'; 
import { Product } from "./product";
const Shop = () => {
  return (
    <div className="shop">
        <div className="products">{PRODUCTS.map((product)=><Product data={product}/>)}</div>
    </div>
  )
}
export default Shop;