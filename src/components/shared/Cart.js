import React,{useContext} from 'react';
import styles from "./Cart.module.css"
import { CartContext } from '../../context/CartContextProvider';
import { shorten } from '../helper/function';
const Cart = (props) => {
    const {dispatch} = useContext(CartContext)
    const {image,title,price,qauntity} = props.data
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product"/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div>
                <span className={styles.quantity}>{qauntity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    qauntity > 1 ? <button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button>
                    : <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}>--</button>
                }
                <button onClick={()=>dispatch({type:"INCREASE",payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;