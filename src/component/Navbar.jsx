import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {cartContext} from "../globle/CartContext";



const Navbar = ()=>{
	const data = useContext(cartContext);

	return(
		<nav>
			<ul className="left">
				<li> <Link to="/">BestDeal</Link> </li>
			</ul>
			<ul className="right">
				<li> 
				<Link to="/cart">
					<span className="shopingcart">
						<i className="fas fa-cart-plus"></i>
						<span className="cardcount">{data.qty}</span>
					</span>
				</Link> 
				</li>
			</ul>
		</nav>
		)
}
export default Navbar;