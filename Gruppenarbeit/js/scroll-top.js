/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 * 
 */



window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
        function myFunction() {
            var element = document.getElementById("return-to-top");
            element.classList.remove("visible");       // you're at the bottom of the page
        
        }
    }
    }
};

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


