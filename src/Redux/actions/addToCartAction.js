import { ADD_TO_CART } from "../constants";

export const addToCart=(id)=>{
    console.log("action", id);
    return{
        type:ADD_TO_CART,
        payload:id
    }
}