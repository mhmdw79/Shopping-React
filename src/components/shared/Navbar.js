import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"
import { CartContext } from '../../context/CartContextProvider';
import shopIcone from "../../assets/icons/shop.svg"
const Navbar = () => {
   const {state} = useContext(CartContext)
    return ( 
        <div className={styles.mainContainer}>
        <div className={styles.container}>
            <Link className={styles.productLink} to="/products">Products</Link>
            <div className={styles.iconContainer}>
              <Link  to="/cart"><img src={shopIcone} alt="shopIcone"/></Link>  
                <span >{state.itemsCounter}</span>
            </div>
        </div>
           </div>
    );
};

export default Navbar;