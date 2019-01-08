var btnList=document.querySelectorAll('.btn-group .btn');
// console.log(btnList);
var totalQty=document.getElementsByName('totalQty')[0];

for (const key in btnList) {
    if (btnList.hasOwnProperty(key)) {
        const element = btnList[key];
        switch(element.name){

            // case 'increase':element.addEventListener('click',increaseValue);break;
            // case 'decrease':element.addEventListener('click',decreaseValue);break;
            case 'addToCart':element.addEventListener('click',addToCart);break;
        }        
    }
}



var za=document.getElementsByName('increase');
// console.log(za);
var zaa=document.getElementsByName('decrease');
var zaaa=document.getElementsByName('addToCart');
// console.log(za);

for(var i=0;i<za.length;i++){
    za[i].addEventListener('click',increaseValue);
}
for(var i=1;i<zaa.length;i--){
    zaa[i].addEventListener('click',decreaseValue);
}




function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}



