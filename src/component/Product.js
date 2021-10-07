import React,{useContext}  from "react";
import {ProductContext} from "../globle/Contextprovider";
import Header from "./Header";
import {cartContext} from "../globle/CartContext";

const Product =()=>{

	const data = useContext(ProductContext);

	const {dispatch} = useContext(cartContext);
	
	return(
		<>
		<Header />
		<div className="card_container card_center">

			{
				data.map((val,i)=>{
					return(
						<div className ="card" key={val.id}>
							<div className="img_box">
								<img src={val.imgsrc} alt="product pic not found" />
							</div>
							<div className="text_area">
								<h1>{val.name}</h1>
								<h3>${val.price}.00 </h3>
								<button onClick={()=>dispatch({type:"add_to_cart", id: val.id, price:val.price, val})} > add to cart</button>
							</div>	
							{
								val.status==="hot"? <p className="hot">hot</p> : <p className="new">new</p>
							}
						</div>
					)
				})
			}			
		</div>
		</>
		)
};
export default Product;