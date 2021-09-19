import axios from "axios"

const BASE_URL = "https://fakestoreapi.com"

const getProduct = async()=>{
    const resposne = await axios.get(`${BASE_URL}/products`)
    return resposne.data
}

export {getProduct}