import React, { createContext, useReducer } from 'react';
const initialState = {
    selectedItem : [],
    itemsCounter : 0,
    total  : 0,
    checkout : false

}
const sumItem = item=>{
    const itemsCounter = item.reduce((total,product)=>total + product.qauntity,0)
    const total = item.reduce((total,product)=>total + product.price * product.qauntity,0 ).toFixed(2)
    return {itemsCounter,total}
}
export const CartContext = createContext()
const cardReduser = (state,action) =>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItem.find(item=>item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                    qauntity:1
                })
            }
            return {
                ...state,
                selectedItem:[...state.selectedItem],
                ...sumItem(state.selectedItem),
                checkout : false

            }

        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(item=>item.id !== action.payload.id)
            return{
                ...state,
                selectedItem:[...newSelectedItem],
                ...sumItem(newSelectedItem)

            }

        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item=> item.id === action.payload.id)
            state.selectedItem[indexI].qauntity++;
            return{
                ...state,
                ...sumItem(state.selectedItem)

            
            }

        case "DECREASE":
            const indexD = state.selectedItem.findIndex(item=> item.id === action.payload.id)
            state.selectedItem[indexD].qauntity--;
            return{
                ...state,
                ...sumItem(state.selectedItem)

            
            }

        case "CHECKOUT":
            return{
                selectedItem : [],
                itemsCounter : 0,
                total  : 0,
                checkout : true
            }

        case "CLEAR":
           return{
            selectedItem : [],
            itemsCounter : 0,
            total  : 0,
            checkout : false}

        default: return state
    
    }
}
 const CartContextProvider = (props) => {

    const [state,dispatch] = useReducer(cardReduser,initialState)
    return (
      
            <CartContext.Provider value={{state,dispatch}}>
             {props.children}
            </CartContext.Provider>
            
       
    );
};

export default CartContextProvider;