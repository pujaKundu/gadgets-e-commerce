import React from 'react';
import  { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [displayProducts,setDisplayProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>{
             setProducts(data);
             setDisplayProducts(data);
        })
        

    },[]);
    useEffect(()=>{
        const savedCart = getStoredCart();
        const storedCart = [];
        if(products.length){
            for(const key in savedCart){
                const addedProduct = products.find(product=> product.key === key);
                storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
        
    },[products])
    const handleAddToCart =(product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key);
    }
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);

    }
    return (
        <div>
            <div className="search-container">
            <input 
            type="text" 
            onChange={handleSearch}
            placeholder="Search Product"/>
            </div>
            <div className="shop-container">
            <div className="products-container">
                <h1>
                    Products: {products.length}
                    
                </h1>
                {
                    displayProducts.map(product=><Products
                    key = {product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Products>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Shop;