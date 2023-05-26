const btn = document.getElementById("btn");
const light= document.getElementById("light")

function toggleBtn(){
   btn.classList.toggle("active");
   light.classList.toggle("on");
}