
var order = document.querySelectorAll('.buy');
for(i=0;i<order.length;i++)
{
order[i].addEventListener('click',()=>
{
      location.href ="buy.html";
});
}
var cart = document.querySelectorAll('.cart');
var products=
[
{
         name:"Arisi Muruku",
         tag:"s2",
         price:50,
         incart:0
},
{
        name:"Mothipak",
        tag:"s3",
        price:60,
        incart:0
},
{
    name:"kulli panyaram",
    tag:"s1",
    price:80,
    incart:0
},
{
    name:"Bannana bonda",
    tag:"s4",
    price:50,
    incart:0
},
{
    name:"Raggi Mudde",
    tag:"s5",
    price:50,
    incart:0
},
{
    name:"Payasam",
    tag:"s6",
    price:150,
    incart:0
},
{
    name:"sweet",
    tag:"s7",
    price:60,
    incart:0
},
{
    name:"sweet somas",
    tag:"s8",
    price:50,
    incart:0
},
{
    name:"pori",
    tag:"s19",
    price:50,
    incart:0
},
{
    name:"palm jaggery",
    tag:"s9",
    price:150,
    incart:0
},
{
    name:"Tirunelveli Halwa",
    tag:"s10",
    price:250,
    incart:0
},
{
    name:"Macaroons",
    tag:"s11",
    price:250,
    incart:0
},
{
    name:"Chikki candy",
    tag:"s12",
    price:42,
    incart:0
},
{
    name:"Vada",
    tag:"s13",
    price:50,
    incart:0
}, 
{
    name:"Neer Moor",
    tag:"s14",
    price:40,
    incart:0
}
];
for(let i=0;i<cart.length;i++)
{
    cart[i].addEventListener('click',()=>
    {
       cartNumbers(products[i]); 
       totalcost(products[i]);
       alert("sucessfully added to cart");


    
    });
}

function onload()
{
    var productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers)
    {
        document.querySelector('.span').textContent = productNumbers;
    }
}

function cartNumbers(product)
{
 
   let productNumbers=  localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if(productNumbers)
    {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.span').textContent = productNumbers+1;
}
else
{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.span').textContent =1;
}
setItems(product);
}

function setItems(product)
{
    let cartItems = localStorage.getItem('productsIncart');
    cartItems= JSON.parse(cartItems);
    
    if(cartItems != null)
    {
        if(cartItems[product.tag] == undefined)
        {
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].incart +=1;
    }
    else{
    product.incart=1;
     cartItems =
    {
        [product.tag]:product
    }
}
    localStorage.setItem('productsIncart', JSON.stringify(cartItems));
   
}

function totalcost(product)
{
let cartcost = localStorage.getItem('totalcost');

if(cartcost!= null)
{
    cartcost=parseInt(cartcost);
    localStorage.setItem('totalcost', cartcost + product.price);
}
else
{

localStorage.setItem('totalcost',product.price);
}
}
 

function displaycart()
{
let cartItems = localStorage.getItem('productsIncart');
cartItems=JSON.parse(cartItems);

let productcontainer = document.querySelector('.products');
let cartcost = localStorage.getItem('totalcost');

console.log(cartItems);

if(cartItems && productcontainer)   
{
    productcontainer.innerHTML='' ;
  Object.values(cartItems).map(item =>
        {
            
        productcontainer.innerHTML += `
<div class="products">
<img src="./image/${item.tag}.jpg"></div>
 <span>${item.name}</span>

<div class ="price"><i class="fas fa-rupee-sign"></i>
${item.price}</div>
<div class ="quantity">
<i class="fas fa-angle-left"></i>
<span>${item.incart}</span>
<i class="fas fa-angle-right"></i>
</div>
<div class="total">
<i class="fas fa-rupee-sign"></i>${item.incart * item.price}.00
</div>
<div class="remove">
<button onclick="remove()" class="but">
delete
</button>
</div>
`
});
productcontainer.innerHTML +=`
<div class= "baskettotal">
<h4 class="Totalamount">
Total Amount 
 
 <i class="fas fa-rupee-sign"></i>${cartcost}.00
 </h4>
</div>
<div class="order">
<a href="buy.html">
ordernow</a>
</div>

`
}
}

 displaycart();
 onload();
