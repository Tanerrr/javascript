// log text content from #headline
console.log(document.getElementById("headline"));

// „Cool, sie ist offen! :)“
document.getElementById("headline").innerHTML = "Cool, sie ist offen! :)"

// set value of the input element #input to:
// „Hier steht Text“
document.getElementById("input").value = "Hier steht Text";

// set the value of the input element #input
// as the innerHtml of the div #output
document.getElementById("output").innerHTML = document.getElementById("input").value;

// add the class bg-black to the body
// if there it doesn't got it already
var root = document.getElementsByTagName( 'body' )[0];
root.setAttribute( 'class', 'bg-black' );


// toggle the class border-red on the input
document.getElementById("input").style.borderColor = "red";


// multiply the data-number attribute by 3
// and update the value in the dom  
document.getElementById("output").dataset.number *= 3;

// var x = document.getElementsByTagName("div")[0].getAttribute("data-number");
// var root = document.getElementsByTagName( 'div' )[0];
// y = x * 3
// root.setAttribute('data-number', y)
// var z = document.getElementsByTagName("div")[0].getAttribute("data-number");
// console.log(z)
