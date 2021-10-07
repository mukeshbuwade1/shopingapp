import React ,{createContext, useReducer} from "react"
import {CartReducer} from "./CartReducer";

const cartContext = createContext();


const CartContext =(props)=>{

	const [cart, dispatch] = useReducer(CartReducer, {shopingCart: [],totleprice: 0,qty: 0});
	return(
		<cartContext.Provider value={{...cart,dispatch}}>
			{props.children}
		</cartContext.Provider>
		)
}
export default CartContext; 
export {cartContext} ;