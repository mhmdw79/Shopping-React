import React,{useState,useEffect, createContext} from 'react';
//API
import { getProduct } from '../services/api';

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

    const [product,setProduct] = useState([])

    useEffect(()=>{

    const fetchAPI = async()=>{
        setProduct(await getProduct())
    }

    fetchAPI()

    },[])
    return (
       <ProductContext.Provider value={product}>

           {props.children}

       </ProductContext.Provider>
    );
};

export default ProductContextProvider;