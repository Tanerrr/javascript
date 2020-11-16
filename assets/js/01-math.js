/**
 * VARIABLES
 */
const three = 3;
const six = 6;

console.log('Hallo')
// add six to three
console.log("Addieren: ", three + six);
// subtract six from three
console.log("Subtraction: ", three - six);
// multiply three times six
console.log("Multiplicatin: ", three * six);
// divide three by six
console.log("Division: ", three / six);
// modulo six by three
console.log("Modulo: ", three % six);
// log results

// build a function, that:
// takes two parameters
// checks if both parameters are numbers, else returns error message in the console
// divides the first one by the second one
// adds three to the result of the division
// multiplies the result by the second parameter
// when the result is equal to 21, subtract 4
// else add 4
// and then returns the result
function erste(first, second){
    console.log(typeof first);
    if (typeof first != "number" || typeof second != "number") {
        console.log("Falsche Input");
        return null;
    }
    var division = first / second;
    var addThree = division + 3;
    var multipliesBy2 = (addThree % 10) * addThree;
    if (multipliesBy2 == 21){
        return multipliesBy2 - 4;
    }
    else{
        return multipliesBy2 + 4;
    }

}

// log the result of the function
console.log("Ergebnis : ", erste(three, 10.5));

// return console.error('der zweite Parameter ist keine Zahl')

// switch (result){
//  case 21:
//      result = result - 4;
//      break;
//  default:
//      result = result + 4;
//      break;
//}
//      return result;

