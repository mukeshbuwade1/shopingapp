import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Contextprovider from "./globle/Contextprovider";
import Product from "./component/Product";
import Cart from "./component/Cart";
import NotPage from "./component/NotPage";
import CartContext from "./globle/CartContext";

const App =()=>{

	return (
		<Contextprovider>
		<CartContext>
		  <BrowserRouter>
		    <Navbar />
		  	<Switch>
		  	  <Route exact path="/" > <Product /> </Route>
		  	  <Route exact path="/cart" > <Cart /> </Route>
		  	  <Route> <NotPage/> </Route>
		  	</Switch>
		  </BrowserRouter>
		</CartContext>
		</Contextprovider>

		
		)
}
export default App;