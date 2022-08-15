let radios =document.querySelectorAll("input[name='checked']");
let cards = document.getElementsByClassName("panel");
let p = document.querySelectorAll(".main .panel p");
radios.forEach((radio)=>{
    radio.addEventListener('click',(e)=>{
        cancelChecked()
        cards[Number.parseInt(radio.value)-1].classList.add("select_card");
        p[radio.value - 1].classList.add("word");
    })
})
function cancelChecked(){
   for(let i = 0 ;i<cards.length;i++){
       if (cards[i].classList.value.indexOf('select_card')>-1){
           cards[i].classList.remove("select_card");
       }
   }
  for (let i = 0; i < p.length; i++) {
      if (p[i].classList.value.indexOf("word")>-1){
          p[i].classList.remove("word");
      }
  }
}

