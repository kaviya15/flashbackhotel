
var order = document.querySelectorAll('.buy');
for(i=0;i<order.length;i++)
{
order[i].addEventListener('click',()=>
{
      location.href ="buy.html";
});
}
var cart1 = document.querySelectorAll('.cart');
 var nonvegs=
 [
 {
          name:"chicken65",
          tag:"n1",
          price:150,
          incart:0
 },
 {
         name:"chicken Biriyani",
         tag:"n2",
         price:260,
         incart:0
 },
 {
     name:"Chicken Chettinadu",
     tag:"n3",
     price:180,
     inhtmlcart:0
 },
 {
     name:"Prawn Gravy",
     tag:"n4",
     price:350,
     incart:0
 },
 {
     name:"Fish Fry",
     tag:"n5",
     price:250,
     incart:0
 },
 {
     name:"karuveplai chicken finger",
     tag:"n6",
     price:150,
     incart:0
 },
 {
     name:"Varutha kari",
     tag:"n7",
     price:150,
     incart:0
 },
 {
     name:"Fish Curry",
     tag:"n8",
     price:120,
     incart:0
 },
 {
     name:"Nalli Masala",
     tag:"n9",
     price:540,
     incart:0
 },
 {
     name:"Nandu Masala",
     tag:"n10",
     price:350,
     incart:0
 },
 {
     name:"PBM spl Kutchi Eral",
     tag:"n11",
     price:350,
     incart:0
 },
 {
     name:"Thala kari",
     tag:"n12",
     price:250,
     incart:0
 },
 {
     name:"Mutton Gravy",
     tag:"n13",
     price:242,
     incart:0
 },
 {
     name:"Mutton Biriyani",
     tag:"n14",
     price:250,
     incart:0
 }, 
 {
     name:"prawn Biriyani",
     tag:"n15",
     price:240,
     incart:0
 }
 
 ];

for(let i=0;i<cart1.length;i++)
{
    cart1[i].addEventListener('click',()=>
    {
        cartNumber(nonvegs[i]);
        totalcost(nonvegs[i]);
        alert("sucessfully added to cart");


    });
}

function onload()
{
    var pnum = localStorage.getItem(cartNumber);
    if(pnum)
    {
        document.querySelector('.span').textContent= pnum;

    }
}


 function cartNumber(nonveg)
 {

    let pnum = localStorage.getItem(cartNumber);
    pnum = parseInt(pnum);
    if(pnum)
    {
        localStorage.setItem(cartNumber,pnum+1);
        document.querySelector('.span').textContent= pnum+1;

    }
    else
    {
     localStorage.setItem(cartNumber,1);
     document.querySelector('.span').textContent=1;

    }
    setItems(nonveg);
 }
function setItems(nonveg)
{
    let cartItem = localStorage.getItem('productsIncart');
    cartItem= JSON.parse(cartItem);
    
    if(cartItem != null)
    {
        if(cartItem[nonveg.tag] == undefined)
        {
            cartItem = {
                ...cartItem,
                [nonveg.tag]:nonveg
            }
        }
        cartItem[nonveg.tag].incart +=1;
    }
    else{
    nonveg.incart=1;
     cartItem=
    {
        [nonveg.tag]:nonveg
    }
}
    localStorage.setItem('productsIncart', JSON.stringify(cartItem));
   
}

function totalcost(nonveg)
{
let cartcost = localStorage.getItem('totalcost');

if(cartcost!= null)
{
    cartcost=parseInt(cartcost);
    localStorage.setItem('totalcost', cartcost + nonveg.price);
}
else
{

localStorage.setItem('totalcost',nonveg.price);
}
}
 onload();