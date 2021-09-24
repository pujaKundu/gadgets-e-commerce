
import './Products.css'

const Products = (props) => {
    const {name,img,seller,stock,price} = props.product;
    console.log(props.product)
    
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
            <p className="product-name">{name}</p>
            <p><small>by: {seller}</small></p>
            <p>Price: ${price}</p>
            <p><small>Only {stock} left ,order soon</small></p>
            <button className="purchase-btn">Add to cart</button>
            </div>
            
        </div>
    );
};

export default Products;