/*
multiple line comments in JS
*/

/*
let tvShow = "Friends";
let characters = 6;

var newUser = "Sarah";
var sentence = `My name is ${newUser} and I am learning JS`;
console.log(sentence);

/*
let rsvpAnswer = prompt("Would you like to attend the party? [y] or [const name = new type(arguments);]");
if (rsvpAnswer === "y") {
  alert("Looking forward to seeing you!");
} else alert("I am sorry you can't make it");

countries = ["Germany", "Mexico"];
console.log(countries);
countries.push("UK");
console.log(countries);
countries.shift();
console.log(countries);
countries.splice(1, 0, "Spain");
console.log(countries);
var countryList = countries.join(", ");
console.log(countryList);
console.log(countries[1]);
*/

/*
console.log("hello world");
for (i = 0; i < 5; i++) {
  console.log(i);
}

for (i = 10; i > 0; i--) {
  console.log(i);
  console.log(i * 10);
}

function myName() {
  userName = prompt("What is your name?");
  console.log("Hello " + userName);
  console.log(`Hello ${userName}`);
}

myName();
*/

/*
function product(a, b) {
  return a * b;
}

var value1 = product(2, 4);
console.log(value1);

var value2 = product(10, 5);
console.log(value2);

var finalResult = product(value1, value2);
console.log(finalResult);
*/

/*

function movieDetails(title, released) {
  return `My favourite movie is ${title} which was released in ${released}`;
}

var movie1 = movieDetails("Mean Girls", "2000");
console.log(movie1);

function verifyDiscount(name, age) {
  if (age > 18) {
    return "Discount has been applied for " + name;
  } else {
    return "Sorry you are not eligible " + name;
  }
}

console.log(verifyDiscount("Sarah", 25));
console.log(verifyDiscount("Sarah", 17));

function shoppingCart(item, cost, balance) {
  if (balance < cost) {
    return "Sorry you can't afford " + item + " as it costs " + cost;
  } else {
    return "Yay you can afford " + item;
  }
}

console.log(shoppingCart("chocolate", 2, 10));
console.log(shoppingCart("chocolate", 12, 10));
*/

/*
let myString = "Bonjour";
console.log(myString);

const myArray = [];
myArray.push("Guten Tag");

myArray.push("Hola", "Hello");
console.log(myArray);

for (i = 0; i <= 10; i++)
  // write a function that reverses a string

  reverse = [];

function reverseString(string) {
  for (i = string.length - 1; i >= 0; i--) {
    reverse.push(string[i]);
    backwards = reverse.join();
    console.log(backwards);
  }
}

reverseString(myString);

// write a function that sorst a string in alphabetical order

reverseArray = [];

function sortString(word) {
  for (i = 0; i <= word.length; i++) {
    reverseArray.push(word[i]);
    sortResult = reverseArray.sort();
    joinResult = reverseArray.join("");
    console.log(joinResult);
  }
}

sortString("cat");

// Write a function that loops over an array or strings and capitalises each one before returning the array

const animalArray = ["zebra", "bear", "giraffe"];

function capitaliseString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const capitalArray = animalArray.map(capitaliseString);
console.log(capitalArray);

*/

var paragraph = document.createElement("p");
paragraph.innerText = "Hi!";
paragraph.style.fontSize = "18px";
document.body.appendChild(paragraph);

paragraph.addEventListener("mouseenter", function () {
  paragraph.style.color = "orange";
});
