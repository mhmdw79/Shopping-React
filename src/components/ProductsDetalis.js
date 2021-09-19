import React,{useContext} from 'react';
 import { ProductContext } from '../context/ProductContextProvider';
 import { Link } from 'react-router-dom';
 import styles from "./ProductsDetalis.module.css"
const ProductsDetalis = (props) => {
    const data = useContext(ProductContext)
    const id = props.match.params.id
    const product = data[id - 1]
    const{image,title,description,price,category} = product
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="producimage"/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetalis;