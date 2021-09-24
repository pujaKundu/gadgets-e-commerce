import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    const total = cart.reduce((previous,product)=>previous+product.price,0);
    const shipping =(cart.length>15)?15:0;
    const tax = (shipping + total)*0.1;
    const grandTotal = total+ shipping+tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered : {cart.length}</h5>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            
            <hr />
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;