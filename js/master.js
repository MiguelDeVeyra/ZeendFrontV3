function CheckDeposit(val){
 var element=document.getElementById('customAmount');
 if(val=='custom_amount')
   element.style.display='block';
 else
   element.style.display='none';
}

function CheckBill(val){
 var element=document.getElementById('customAmount');
 var element2=document.getElementById('customAmount1');
 if(val=='custom_amount' ){
   element.style.display='block';
   element2.style.display='block';
 } else{
   element.style.display='none';
   element2.style.display='none';
}
 }
