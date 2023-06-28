const colors=["red","(128, 0, 128)","pink","#FFFF00"]
const btn=document.getElementById("btn");
const span=document.getElementById("color");

btn.addEventListener("click",function(){
var color="";
for(let i=0;i<colors.length;i++){
color=colors[getrandomnumber()];
}
document.body.style.backgroundColor=color;
span.textContent=color;
});
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}