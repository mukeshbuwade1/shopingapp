(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(19),i=c.n(r),a=(c(27),c(7)),n=c(2),j=c(17),d=c(12),l=c(16),m=function(e,t){var c,s,r,i=e.shopingCart,a=e.totleprice,n=e.qty;switch(t.type){case"add_to_cart":return i.find((function(e){return e.id===t.id}))?(alert("item already in cart"),e):(n+=1,{shopingCart:i=[].concat(Object(l.a)(i),[t.val]),totleprice:a+=t.price,qty:n});case"INC":return(c=t.product).myqty=c.myqty+1,{shopingCart:i,totleprice:s=a+c.price,qty:r=n+1};case"DEC":if((c=t.product).myqty<=1){if(!0===window.confirm("Are you sure to Delete item from cart?")){var j=i.filter((function(e){return e.id!==t.id}));return s=a-c.price,r=n-1,{shopingCart:Object(l.a)(j),totleprice:s,qty:r}}return e}return c.myqty=c.myqty-1,{shopingCart:i,totleprice:s=a-c.price,qty:r=n-1};default:return e}},o=c(0),h=Object(s.createContext)(),b=function(e){var t=Object(s.useReducer)(m,{shopingCart:[],totleprice:0,qty:0}),c=Object(d.a)(t,2),r=c[0],i=c[1];return Object(o.jsx)(h.Provider,{value:Object(j.a)(Object(j.a)({},r),{},{dispatch:i}),children:e.children})},u=function(){var e=Object(s.useContext)(h);return Object(o.jsxs)("nav",{children:[Object(o.jsx)("ul",{className:"left",children:Object(o.jsxs)("li",{children:[" ",Object(o.jsx)(a.b,{to:"/",children:"BestDeal"})," "]})}),Object(o.jsx)("ul",{className:"right",children:Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/cart",children:Object(o.jsxs)("span",{className:"shopingcart",children:[Object(o.jsx)("i",{className:"fas fa-cart-plus"}),Object(o.jsx)("span",{className:"cardcount",children:e.qty})]})})})})]})},O=Object(s.createContext)(),x=[{id:1,name:"item no 1",price:100,imgsrc:"image/DSLR.jpg",status:"hot",myqty:1},{id:2,name:"item no 2",price:200,imgsrc:"image/perfume.jpg",status:"new",myqty:1},{id:3,name:"item no 3",price:300,imgsrc:"image/watch.jpg",status:"new",myqty:1},{id:4,name:"item no 4",price:400,imgsrc:"image/camera.jpg",status:"hot",myqty:1},{id:5,name:"item no 5",price:500,imgsrc:"image/perfume.jpg",status:"hot",myqty:1},{id:6,name:"item no 6",price:600,imgsrc:"image/camera.jpg",status:"hot",myqty:1},{id:7,name:"item no 7",price:700,imgsrc:"image/watch.jpg",status:"new",myqty:1},{id:8,name:"item no 8",price:800,imgsrc:"image/DSLR.jpg",status:"hot",myqty:1}],p=function(e){var t=Object(s.useState)(x),c=Object(d.a)(t,1)[0];return Object(o.jsx)(O.Provider,{value:c,children:e.children})},g=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"header_bg center",children:Object(o.jsxs)("div",{className:"textarea center",children:[Object(o.jsx)("h1",{children:"great indian festival"}),Object(o.jsx)("p",{children:"best deal on mens wear"}),Object(o.jsx)("button",{children:"shop now"})]})})})},y=function(){var e=Object(s.useContext)(O),t=Object(s.useContext)(h).dispatch;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)("div",{className:"card_container card_center",children:e.map((function(e,c){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"img_box",children:Object(o.jsx)("img",{src:e.imgsrc,alt:"product pic not found"})}),Object(o.jsxs)("div",{className:"text_area",children:[Object(o.jsx)("h1",{children:e.name}),Object(o.jsxs)("h3",{children:["$",e.price,".00 "]}),Object(o.jsx)("button",{onClick:function(){return t({type:"add_to_cart",id:e.id,price:e.price,val:e})},children:" add to cart"})]}),"hot"===e.status?Object(o.jsx)("p",{className:"hot",children:"hot"}):Object(o.jsx)("p",{className:"new",children:"new"})]},e.id)}))})]})},f=c(22),v=c.n(f),N=function(){var e=Object(s.useContext)(h),t=e.shopingCart,c=e.totleprice,r=e.qty,i=e.dispatch;return Object(o.jsxs)("div",{className:"cart_section",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("div",{className:"list",children:r>0?t.map((function(e){return Object(o.jsxs)("div",{className:"cart_list",children:[Object(o.jsx)("div",{className:"cart_left",children:Object(o.jsx)("img",{src:e.imgsrc,alt:"pic not found"})}),Object(o.jsxs)("div",{className:"cart_center",children:[Object(o.jsx)("h1",{children:e.name}),Object(o.jsxs)("h3",{children:["$",e.price,".00"]})]}),Object(o.jsxs)("div",{className:"cart_right",children:[Object(o.jsx)("img",{src:"image/add.svg",onClick:function(){return i({type:"INC",id:e.id,product:e})},className:"add button",alt:"button not found"}),Object(o.jsx)("h5",{children:e.myqty}),Object(o.jsx)("img",{src:"image/remove.svg",onClick:function(){return i({type:"DEC",id:e.id,product:e})},className:"add button",alt:"button not found"})]})]},e.id)})):Object(o.jsxs)("div",{className:"emptycart",children:[Object(o.jsx)("h1",{children:"nothing to show in cart"}),Object(o.jsx)("hr",{})," ",Object(o.jsx)(a.b,{to:"/",className:"additem_link",children:"click here to add items"})]})})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("div",{className:"cart_summary",children:"Cart Summary"}),Object(o.jsxs)("div",{className:"qty_section",children:[Object(o.jsx)("h3",{className:"makeleft",children:"Total Quantity:"}),Object(o.jsx)("h3",{className:"makeright",children:r})]}),Object(o.jsxs)("div",{className:"price_section",children:[Object(o.jsx)("h3",{className:"makeleft",children:"Total Price : "}),Object(o.jsxs)("h3",{className:"makeright",children:["$",c,".00"]})]}),Object(o.jsx)("div",{className:"checkout_button",children:Object(o.jsx)(v.a,{})})]})]})},q=function(){return Object(o.jsxs)("div",{className:"error_contenar",children:[Object(o.jsxs)("h1",{children:["4",Object(o.jsx)("span",{children:"0"}),"4"]}),Object(o.jsx)("p",{children:"opps! page not found"})]})},C=function(){return Object(o.jsx)(p,{children:Object(o.jsx)(b,{children:Object(o.jsxs)(a.a,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(n.c,{children:[Object(o.jsxs)(n.a,{exact:!0,path:"/",children:[" ",Object(o.jsx)(y,{})," "]}),Object(o.jsxs)(n.a,{exact:!0,path:"/cart",children:[" ",Object(o.jsx)(N,{})," "]}),Object(o.jsxs)(n.a,{children:[" ",Object(o.jsx)(q,{})," "]})]})]})})})};i.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2ded2ad2.chunk.js.map