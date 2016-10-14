
console.log("addition");

var i;

for (var i = 5; i <= 120; i += 10) {
	console.log("i =", i);
}

console.log("division");

for (var i = 4096; i > 1; i = i / 2) {
	console.log ("i =", i);
}






console.log("array iteration");


var prez = ["George Washington", "John Adams", "Thomas Jefferson", "Commander Fluffy"];


for (i = 0; i < prez.length; i ++) {
	console.log("President #" + (i + 1) + " was " + prez[i]);
}





console.log("object iteration");

var antSpecies = {
	argentine: {},
	army: {},
	bigHeaded: {},
	black: {},
	bull: {},
	carpenter: {},
	crazy: {},
	fire: {},
	glider: {},
	honeyPot: {},
	jackJumper: {},
	snarf: {}
}

// for (var i = 0; i < antSpecies.length; i++) {
// 	console.log(antSpecies[i]);
// }





 // LOOPING THROUGH AN OBJECT!!!!!!!!
  // LOOPING THROUGH AN OBJECT!!!!!!!!
   // LOOPING THROUGH AN OBJECT!!!!!!!!
    // LOOPING THROUGH AN OBJECT!!!!!!!!
     // LOOPING THROUGH AN OBJECT!!!!!!!!
      // LOOPING THROUGH AN OBJECT!!!!!!!!
       // LOOPING THROUGH AN OBJECT!!!!!!!!





for (var ant in antSpecies) {
	console.log(ant);
}



























