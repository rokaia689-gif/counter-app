alert("hello");
let counter=0 ;
let count =document.getElementById("count");
let tasbeeh=document.getElementById("tasbeeh");
let reset=document.getElementById("reset");
let text=document.getElementById("text");

function changealzeker(){
    if(counter==33){
        text.innerHTML="الحمدلله";
    }
    else if(counter==66){
        text.innerHTML="الله أكبر";
    }
    else if(counter==99){
        text.innerHTML="تم قراءة الأذكار بنجاح"
        counter=0;
        count.innerHTML=counter;
    }
}

tasbeeh.addEventListener("click",function(){
    counter++;
    count.innerHTML=counter
    changealzeker();

});
reset.addEventListener("click",function(){
    counter=0;
    count.innerHTML=counter
    text.innerHTML="سبحان الله";
});
    
