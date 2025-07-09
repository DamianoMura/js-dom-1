// fase 1
//identifico il bottone
const button=document.getElementById("toggle-light");
//fase2
//gli assegno un event listener per click
button.addEventListener(`click`,function(){
  let toggle=document.getElementById("light-bulb");//acquisiamo l'immagine
  if(toggle.src.includes("white")){ //se nella url dell'immagine c'è scritto white lo cambiamo con yellow
    toggle.src=toggle.src.replace("white","yellow")
  }
  else{//oppure cambiamo yellow con white
    toggle.src=toggle.src.replace("yellow","white")
  }
})