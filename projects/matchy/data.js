/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "bat";
animal["name"] = "Steve";
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "clicks";
noises[noises.length - 1] = "pings"; // adds to the end of array
noises.push("scratch"); //adds to back of array
noises.push("");
noises.unshift("flutter"); // adds to beginning of array
noises[noises.length - 1] = "pings"; // adds to the end of array

let lastArr = noises[noises.length - 1];  // creating var for the last sound makes
console.log(noises.length);
console.log(lastArr);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
let noise2 = "flap";
animal.noises.push(noise2)

console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var duck = { 
  species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
var goat = { 
  species: 'goat', name: 'Al', noises: ['stomp', 'bla', 'sneeze', 'woosh'] 
};
var cat = { 
  species: 'cat', name: 'Jerry', noises: ['hiss', 'meow', 'scratch', 'pounce'], friends: [getRandom(animals)],
};
animals.push(duck);
animals.push(goat);
animals.push(cat);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using array to list a set of friends
var friends = [];
function getRandom(animals){
  return Math.floor(Math.random(animals.length));
}
getRandom(animal);
console.log(friends);
animals["bat"] = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}