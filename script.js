let counter=0;
let count=document.getElementById("count");
let increase=document.getElementById("increase");
let decrease=document.getElementById("decrease");
let reset=document.getElementById("reset");
function changecolor(){
    if (counter>0){
   count.style.color="green"}
else if(counter<0){
count.style.color="red";
}
else
{count.style.color="black"};
}



increase.onclick=function(){
    counter++;
    count.innerHTML=counter;
    changecolor();
}
decrease.onclick=function(){
    counter--;
    count.innerHTML=counter;
    changecolor(); 
}
reset.onclick=function(){
    counter=0;
    count.innerHTML=counter;
    changecolor(); 
}
