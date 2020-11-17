/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */
function searchHide() {
  var x = document.getElementById("searchbar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clearInputfield(){
    document.getElementById("searchinput").value = '';
}