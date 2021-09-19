import React,{useContext} from 'react';
import { shorten,isInCart,quantityCount } from '../helper/function';
import { Link } from 'react-router-dom';
import styles from "./Product.module.css"
import { CartContext } from '../../context/CartContextProvider';
const Product = (props) => {
    const {state,dispatch}= useContext(CartContext)
    const {productData} = props
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} style={{width:"200px"}} src={productData.image} alt="Product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Datalis</Link>

                <div className={styles.buttonContainer}>
                    {isInCart(state,productData.id)? <button onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>
                    : <button onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>add to cart</button>
                }
                {quantityCount(state,productData.id) === 1 && <button onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
                {quantityCount(state,productData.id) > 1 && <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}>--</button>}
                {quantityCount(state,productData.id) > 0 && <span className={styles.counter}>{quantityCount(state,productData.id)}</span>}
                </div>
            </div>
        </div>
    );
};

export default Product;