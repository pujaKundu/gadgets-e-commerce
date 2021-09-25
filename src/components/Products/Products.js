import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import Rating from 'react-rating';

const Products = (props) => {
    const {name,img,seller,stock,price,star} = props.product;
    
    const element = <FontAwesomeIcon icon={faShoppingCart} />
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
            <Rating
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly></Rating>
            <br />
            <br />
            <button onClick={()=>props.handleAddToCart(props.product)} className="purchase-btn">{element} Add to cart</button>
            </div>
            
        </div>
    );
};

export default Products;