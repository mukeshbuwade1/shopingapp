export const CartReducer =(cart, action)=>{
	var {shopingCart,totleprice,qty}=cart;
	let product;
	let updaetprice;
	let updaetqty;

	switch(action.type){
		case "add_to_cart":
			const data = shopingCart.find((val)=>{return( val.id ===action.id )});

			if(data){
				alert("item already in cart")
				return cart;
			}else{
				
				shopingCart = [...shopingCart, action.val];
				qty = qty+1;
				totleprice = totleprice+action.price;
				
				return({shopingCart,totleprice,qty});
			}
			break;
		case "INC":
			product = action.product;
			product.myqty = product.myqty +1;
			updaetprice = totleprice+product.price;
			updaetqty = qty+1;
			return({shopingCart,totleprice:updaetprice,qty: updaetqty});
			break;

		case "DEC" :
			product = action.product;
			
			if(product.myqty <= 1){
				let flag = window.confirm("Are you sure to Delete item from cart?");
				if (flag ===true){
					const data = shopingCart.filter((val)=>{return( val.id !== action.id )});					
					updaetprice = totleprice-product.price;
					updaetqty = qty-1;
					return({shopingCart : [...data],totleprice:updaetprice,qty: updaetqty});
				}else{
					return cart;
				}
				
			}else{
				
				product.myqty = product.myqty -1;
				updaetprice = totleprice-product.price;
				updaetqty = qty-1;
				return({shopingCart,totleprice:updaetprice,qty: updaetqty});
			}
			break;
			
		default:
			return cart;
	}
	
}

