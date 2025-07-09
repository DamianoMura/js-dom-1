// fase 1
//identifico il bottone
const button=document.getElementById("toggle-light");
//fase2
//gli assegno un event listener
button.addEventListener(`click`,function(){
  let toggle=document.getElementById("light-bulb");
  if(toggle.src.includes("white")){
    toggle.src=toggle.src.replace("white","yellow")
  }
  else{
    toggle.src=toggle.src.replace("yellow","white")
  }
})