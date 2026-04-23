let products=[
{name:"Concrete Soul Oversized Tee",price:799,size:["S","M","L","XL","XXL"],cat:"Men",img:"images/tee.jpg"},
{name:"Urban Nomad Cargo Joggers",price:1299,size:["30","32","34","36","38"],cat:"Men",img:"images/cargo.jpg"},
{name:"City Lights Cropped Hoodie",price:999,size:["XS","S","M","L"],cat:"Women",img:"images/hoodie.jpg"},
{name:"Neon Edge Co-ord Set",price:1699,size:["S","M","L","XL"],cat:"Women",img:"images/coord.jpg"},
{name:"Little Legend Graphic Tee",price:449,size:["2-12Y"],cat:"Kids",img:"images/kids.jpg"}
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];
let wishlist=JSON.parse(localStorage.getItem("wish"))||[];

function save(){localStorage.setItem("cart",JSON.stringify(cart));localStorage.setItem("wish",JSON.stringify(wishlist));}

function loadProducts(){
const div=document.getElementById("productList");
products.forEach((p,i)=>{
div.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<p>Sizes: ${p.size.join(", ")}</p>

<button onclick="addCart(${i})">Add to Cart</button>
<button onclick="addWish(${i})">❤️ Wishlist</button>
</div>`;
});
}

function addCart(i){
cart.push(products[i]);
save();
alert("Added to cart");
}

function addWish(i){
wishlist.push(products[i]);
save();
alert("Added to wishlist");
}
