const products=[
{name:"Concrete Soul Oversized Tee",price:799,size:"S,M,L,XL,XXL",cat:"Men",img:"https://source.unsplash.com/400x500/?tshirt"},
{name:"Urban Nomad Cargo Joggers",price:1299,size:"30,32,34,36,38",cat:"Men",img:"https://source.unsplash.com/400x500/?cargo,pants"},
{name:"City Lights Cropped Hoodie",price:999,size:"XS,S,M,L",cat:"Women",img:"https://source.unsplash.com/400x500/?hoodie"},
{name:"Neon Edge Co-ord Set",price:1699,size:"S,M,L,XL",cat:"Women",img:"https://source.unsplash.com/400x500/?fashion,set"},
{name:"Little Legend Graphic Tee",price:449,size:"2-12Y",cat:"Kids",img:"https://source.unsplash.com/400x500/?kids,tshirt"}
];

let cart=[];

function loadProducts(){
const div=document.getElementById("productList");
products.forEach((p,i)=>{
div.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<p>Sizes: ${p.size}</p>
<button onclick="addCart(${i})">Add to Cart</button>
</div>`;
});
}

function addCart(i){
cart.push(products[i]);
alert("Added to cart");
}
