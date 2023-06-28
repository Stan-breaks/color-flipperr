const btn=document.getElementById("btn");
const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const span=document.getElementById("color")


btn.addEventListener("click",function (){
var color=" #";
for(let i=0;i<6;i++){
 color+=hex[getrandomnumber()];
}
document.body.style.backgroundColor=color;
span.textContent=color;
});

function getrandomnumber(){
    return Math.floor(Math.random()*hex.length);
}
