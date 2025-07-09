// fase 1
//identifico il bottone
const button=document.getElementById("toggle-light");
//fase2
//gli assegno un event listener per click
button.addEventListener(`click`,function(){
  let toggle=document.getElementById("light-bulb");//acquisiamo l'immagine
  let button=document.getElementById("toggle-light");
  if(toggle.src.includes("white")){ //se nella url dell'immagine c'è scritto white lo cambiamo con yellow
    toggle.src=toggle.src.replace("white","yellow")
    //cambiamo accendi in spegni
    button.textContent=button.textContent.replace("accendi","spegni");
    button.className=button.className.replace("danger","success");
    
  }
  else{//oppure cambiamo yellow con white
    toggle.src=toggle.src.replace("yellow","white")
    //cambiamo spegni in accendi
    button.textContent=button.textContent.replace("spegni","accendi");
    button.className=button.className.replace("success","danger");
    
  }

});