let bloks = document.querySelectorAll(".travel_z-index3");
let previousButtonId = 'btn1';
let buttons = document.querySelectorAll(".products__btn");

document.getElementById("btn1").addEventListener("click", function() {
    activateButton("btn1");
  });
  document.getElementById("btn2").addEventListener("click", function() {
    activateButton("btn2");
  });
  document.getElementById("btn3").addEventListener("click", function() {
    activateButton("btn3");
  });


  function activateButton(buttonId) {
    buttons.forEach(function(button) {
      if (button.id === buttonId) {
        button.classList.add("active");
        button.classList.remove("inactive");
      } else {
        button.classList.add("inactive");
        button.classList.remove("active");
      }
    });
    bloks.forEach(function(blok){
        if(buttonId== 'btn1' && blok == bloks[0] ){
            bloks[0].classList.remove('none')
          } else if(buttonId== 'btn2' && blok == bloks[1]){
            bloks[1].classList.remove('none')
          }else if(buttonId== 'btn3' && blok == bloks[2]){
            bloks[2].classList.remove('none')
          }else{
            blok.classList.add('none')
          }
    })


  }

