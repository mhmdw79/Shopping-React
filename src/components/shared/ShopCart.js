import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContextProvider';
import Cart from './Cart';
import styles from "./ShopCart.module.css"
import { Link } from 'react-router-dom';
const ShopCart = () => {
    const {state,dispatch} = useContext(CartContext)
    return (
        <div className={styles.container}>
           <div  className={styles.cartContainer}>
               {state.selectedItem.map(item=> <Cart key={item.id} data={item} />)}
           </div>
           {
               state.itemsCounter > 0 && <div className={styles.payments}>
                   <p><span>Total Items</span>{state.itemsCounter}</p>
                   <p><span>Total Payments</span>{state.total}</p>
                   <div className={styles.buttonContainer}>
                       <button onClick={()=>dispatch({type:"CHECKOUT"})}> Check Out</button>
                       <button onClick={()=>dispatch({type:"CLEAR"})}> clear</button>

                    </div>

               </div>
           }
           {
               state.checkout && <div>
                   <h3>checked out successfully</h3>
                   <Link to="/products">Buy more</Link>
               </div>
           }
             {
               !state.checkout && state.itemsCounter === 0 && <div>
                   <h3>want to buy ?</h3>
                   <Link to="/products">Go to shop</Link>
               </div>
           }
        </div>
    );
};

export default ShopCart;