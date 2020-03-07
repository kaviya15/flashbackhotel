var order = document.querySelectorAll('.buy');
for(i=0;i<order.length;i++)
{
order[i].addEventListener('click',()=>
{
      location.href ="buy.html";
});
}
var cart1 = document.querySelectorAll('.cart1');
 var vegs=
 [
 {
          name:"Sambar Idly",
          tag:"v1",
          price:50,
          incart:0
 },
 {
         name:"Poori Masala",
         tag:"v2",
         price:60,
         incart:0
 },
 {
     name:"sprouted Idly",
     tag:"v3",
     price:80,
     incart:0
 },
 {
     name:"Ghee Pongal",
     tag:"v4",
     price:50,
     incart:0
 },
 {
     name:"Chapathi",
     tag:"v5",
     price:50,
     incart:0
 },
 {
     name:"Ghee Roast dosa",
     tag:"v6",
     price:50,
     incart:0
 },
 {
     name:"Thootuvalai Dosa",
     tag:"v7",
     price:70,
     incart:0
 },
 {
     name:"Raggi Dosa",
     tag:"v8",
     price:50,
     incart:0
 },
 {
     name:"Chollam Dosa",
     tag:"v9",
     price:50,
     incart:0
 },
 {
     name:"Aapam",
     tag:"vap",
     price:50,
     incart:0
 },
 {
     name:"Meals",
     tag:"s11",
     price:100,
     incart:0
 },
 {
     name:"Keerai Rice",
     tag:"v12",
     price:50,
     incart:0
 },
 {
     name:"Iddiyapam",
     tag:"v13",
     price:42,
     incart:0
 },
 {
     name:"Kizhangu Adai",
     tag:"v14",
     price:50,
     incart:0
 }, 
 {
     name:"Malli Pongal",
     tag:"v15",
     price:40,
     incart:0
 }
 
 ];

for(let i=0;i<cart1.length;i++)
{
    cart1[i].addEventListener('click',()=>
    {
        cartNumber(vegs[i]);
        totalcost(vegs[i]);
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


 function cartNumber(veg)
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
    setItems(veg);
 }
function setItems(veg)
{
    let cartItem = localStorage.getItem('productsIncart');
    cartItem= JSON.parse(cartItem);
    
    if(cartItem != null)
    {
        if(cartItem[veg.tag] == undefined)
        {
            cartItem = {
                ...cartItem,
                [veg.tag]:veg
            }
        }
        cartItem[veg.tag].incart +=1;
    }
    else{
    veg.incart=1;
     cartItem=
    {
        [veg.tag]:veg
    }
}
    localStorage.setItem('productsIncart', JSON.stringify(cartItem));
   
}

function totalcost(veg)
{
let cartcost = localStorage.getItem('totalcost');

if(cartcost!= null)
{
    cartcost=parseInt(cartcost);
    localStorage.setItem('totalcost', cartcost + veg.price);
}
else
{

localStorage.setItem('totalcost',veg.price);
}
}




 onload();