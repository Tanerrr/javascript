// log the value of the input on every input
function sConsole(event) {
    event.preventDefault();
    var data = document.getElementById("input");
    console.log(data.value);
    
  }

// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“
let button = document.getElementById('submit');
button.addEventListener('click', function(event) {
  event.preventDefault(); // prevents default behavior of the clicked element
  // document.getElementById("output").innerHTML = "Der Button wurde geklickt!";
  this.innerHTML = "Der Button wurde geklickt!";
  // ...
});

// log the message „500px erreicht“, when the user scrolls more than 500px

window.addEventListener("scroll", myFunction);
function myFunction(){
    if (scrollY >= 500){
        console.log("500px erreicht");
    } 
  }
  



