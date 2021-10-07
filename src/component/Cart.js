import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {cartContext} from "../globle/CartContext";
import StripeCheckout from 'react-stripe-checkout';

const Cart =()=>{
	const data = useContext(cartContext);
	const {shopingCart, totleprice, qty, dispatch}=data;
		
	return(
		<div className="cart_section">
			<div className="left">
				<div className="list">
				{
					qty>0? shopingCart.map((product)=>{
							return(
								<div className="cart_list" key={product.id}>
									<div className="cart_left">
										<img src={product.imgsrc} alt="pic not found" />
									</div>
									<div className="cart_center">
										<h1>{product.name}</h1>
										<h3>${product.price}.00</h3>
									</div>
									<div className="cart_right">
										<img src="image/add.svg" onClick={()=>dispatch({type:"INC", id : product.id, product}) } className="add button" alt="button not found"  />
										<h5>{product.myqty}</h5>
										<img src="image/remove.svg" onClick={()=>dispatch({type:"DEC", id : product.id, product}) } className="add button" alt="button not found"/>
									</div>
								</div>
								)
						}):<div className="emptycart"><h1>nothing to show in cart</h1><hr /> <Link to ="/" className="additem_link">click here to add items</Link></div>
				}
				</div>
			</div>
			
			<div className ="right">
				<div className="cart_summary">Cart Summary</div>
				<div className="qty_section">
					<h3 className="makeleft">Total Quantity:</h3>
					<h3 className="makeright">{qty}</h3>
				</div>
				<div className="price_section">
					<h3 className="makeleft">Total Price : </h3>
					<h3 className="makeright">${totleprice}.00</h3>
				</div>
				<div className="checkout_button">
					<StripeCheckout />
				</div>
			</div>
		</div>)
}
export default Cart;