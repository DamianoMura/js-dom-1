// fase 1
//identifico il bottone
const button=document.getElementById("toggle-light");
//fase2
//gli assegno un event listener per click
button.addEventListener(`click`,function(){
  let toggle=document.getElementById("light-bulb");//acquisiamo l'immagine
  let button=document.getElementById("toggle-light");//aquisimo il bottone
  if(toggle.src.includes("white")){ //se nella url dell'immagine c'è scritto white...
    //rimpiazziamo white con yellow nella stringa dell'attributo src("assets/img/white_lamp.png") dell tag <img> 
    toggle.src=toggle.src.replace("white","yellow")
    //cambiamo accendi in spegni all'interno del bottone
    button.textContent=button.textContent.replace("accendi","spegni");
    //extra : cambiamo il colore del pulsante  da verde a rosso (bootstrap)
    button.className=button.className.replace("success","danger");
    
  }
  else{//oppure : cambiamo yellow con white
    toggle.src=toggle.src.replace("yellow","white")
    //cambiamo spegni in accendi all'interno del bottone
    button.textContent=button.textContent.replace("spegni","accendi");
     //extra : cambiamo il colore del pulsante da rosso a verde (bootstrap)
    button.className=button.className.replace("danger","success");
    
  }

});