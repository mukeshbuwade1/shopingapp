import React , {useState, createContext} from "react";

const ProductContext = createContext();
const data = [
		{
			id:1,
			name:"item no 1",
			price:100,
			imgsrc:"image/DSLR.jpg",
			status:'hot',
			myqty:1
		},
		{
			id:2,
			name:"item no 2",
			price:200,
			imgsrc:"image/perfume.jpg",
			status:'new',
			myqty:1
		},
		{
			id:3,
			name:"item no 3",
			price:300,
			imgsrc:"image/watch.jpg",
			status:'new',
			myqty:1
		},
		{
			id:4,
			name:"item no 4",
			price:400,
			imgsrc:"image/camera.jpg",
			status:'hot',
			myqty:1
		},
		{
			id:5,
			name:"item no 5",
			price:500,
			imgsrc:"image/perfume.jpg",
			status:'hot',
			myqty:1
		},
		{
			id:6,
			name:"item no 6",
			price:600,
			imgsrc:"image/camera.jpg",
			status:'hot',
			myqty:1
		},
		{
			id:7,
			name:"item no 7",
			price:700,
			imgsrc:"image/watch.jpg",
			status:'new',
			myqty:1
		},
		{
			id:8,
			name:"item no 8",
			price:800,
			imgsrc:"image/DSLR.jpg",
			status:'hot',
			myqty:1
		}

	]


const Contextprovider = (props) =>{

	const [products] = useState(data);
	
	return(
		<ProductContext.Provider value = {products}>
			{props.children}
		</ProductContext.Provider>
		)
}
export default Contextprovider;
export {ProductContext};