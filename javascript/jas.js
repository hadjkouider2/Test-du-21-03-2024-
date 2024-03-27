let message =document.getElementById("message");
let btn = document.getElementById("btn");
let span = document.getElementById("number");
count = 100
function retirer_uniter(){
count-=1
span.innerHTML = " "+count
if(count < 20){
    span.style.color ="red";
}if(count < 10){
    span.style.color ="blue";
}
if(count < 0){ 
   document.getElementById("message").readOnly = true;
   document.getElementById("number").innerHTML = 0 ;
   document.getElementById("btn").setAttribute("disable" , true);
   btn.style.background ="red";
 
}

}











