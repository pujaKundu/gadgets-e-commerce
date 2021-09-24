import React from 'react';
import  { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])
    return (
        <div className="shop-container">
            <div className="products-container">
                <h1>
                    Products: {products.length}
                    
                </h1>
                {
                    products.map(product=><Products
                    key = {product.key}
                    product={product}
                    ></Products>)
                }
                
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <h5>Items Ordered : </h5>
            </div>
        </div>
    );
};

export default Shop;