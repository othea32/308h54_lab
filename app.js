// Variables & Datatypes
// 1. How do we assign a value to a variable? A. With the assignment operator
// 2. How do we change the value of a...
// ...

// A. Q + A
// How do we assign a value to a variable?
// A. With the assignment operator

// How do we change the value of a variable?
// A. With the assignment operator

// How do we assign an existing variable to a new variable?
// A. With the assignment operator

// Remind me, what are declare, assign, and define?
// A. Declare: creating a variable
// B. Assign: giving a variable a value
// C. Define: giving a variable a value

// What is pseudocoding and why should you do it?
// A. Pseudocoding is writing out the steps of a program in plain English. It helps you think through the problem before you start coding.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// A. 90% thinking, 10% typing

// B. Strings
// Create a variable called firstVariable.
// Assign it the value of the string "Hello World".
// var firstVariable = "Hello World";

// // Change the value of this variable to some number.
// // firstVariable = 1;
// // Store the value of firstVariable in a new variable called secondVariable.
// // var secondVariable = firstVariable;
// // Change the value of secondVariable to any string.
// // secondVariable = "What's up?";
// // What is the value of firstVariable?
// // A. 1
// // Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// var yourName = "Othea";
// var greeting = "Hello, my name is " + yourName;

// console.log(greeting);

// // C. Booleans
// // Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
//  // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c);
// console.log(a * a === d);
// console.log(48 == '48');

// // D. The farm

// // Declare a variable animal. Set it to be either "cow" or something else.
// var animal = "cow";
// // Write code that will print out "mooooo" if the it is equal to cow.
// if (animal === "cow") {
//   console.log("mooooo");
// }
// // Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// else {
//   console.log("Hey! You're not a cow.");
// }

// // Driver's Ed
// // Make a variable that will hold a person's age. Be semantic.
// var age = 16;
// // Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// if (age >= 16) {
//   console.log("Here are the keys");
// } else {
//   console.log("Sorry, you're too young.");
// }

// // Loops
// // A. The basics
// // Write a loop that will print out all the numbers from 0 to 10, inclusive.
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400.
// for (let i = 10; i < 401; i++) {
//   console.log(i);
// }

// // Write a loop that will print out every third number starting with 12 and going no higher than 4000.
// for (let i = 12; i < 4001; i += 3) {
//  console.log(i);
// }

// // B. Get even
// // Print out the even numbers that are within the range of 1 - 100.
// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " <-- is an even number");
//   }
// }

// // C. Give me Five
// // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three AND a multiple of five.
// for (let i = 0; i < 101; i++) {
//   if (i % 5 === 0) {
//     console.log("I found a " + i + ". High five!");
//   }
//   if (i % 3 === 0) {
//     console.log("I found a " + i + ". Three is a crowd");
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("I found a " + i + ". Three is a crowd");
//   }
// }

// // D. Savings account
// // Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// // Check your work! Your bank_account should have $55 in it.
// // You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// // Check your work! Your bank_account should have $10,100 in it.
// let bank_account = 0;
// for (let i = 1; i < 11; i++) {
//   bank_account += i;
// }
// console.log(bank_account);

let bank_account = 0;
for (let i = 1; i < 101; i++) {
  bank_account += i * 2;
}
console.log(bank_account);

// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
// // elements
// Do Arrays guarantee those things will be in order?
// // yes
// What real-life thing could you model with an array?
// // a list of things

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.
// const quotes = ["quote1", "quote2", "quote3"];

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// // randomThings[0]
// What would you write to access the 3rd element of the array?
// // randomThings[2]

// Change Values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// Change the value of "Github" to "Octocat".
ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);

// D. Mix It Up
// Given the following array: const myArray = [5 ,10 ,500, 20]
const myArray = [5 ,10 ,500, 20]
// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Summer");
console.log(myArray);
// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
// Reverse this array using Array.prototype.reverse().
myArray.reverse();
console.log(myArray);

// E. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... else statement
// console.log() out "little number" if the number is entered is less than 100
// console.log() out big number if the number is greater than or equal to 100.
const num = 100;
if (num < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// F. Monkey in the Middle
// Write an if ... else
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log() "monkey".
const num1 = 20;
if (num1 < 5) {
  console.log("little number");
} else if (num1 > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// G. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
 "left shoe",
 "cowboy boots",
 "right sock",
 "Per Scholas hoodie",
 "green pants",
 "yellow knit hat",
 "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
 [
   // These are Thom's shirts
   "grey button-up",
   "dark grey button-up",
   "light blue button-up",
   "blue button-up",
 ],[
   // These are Thom's pants
   "grey jeans",
   "jeans",
   "PJs"
 ],[
   // Thom's accessories
   "wool mittens",
   "wool scarf",
   "raybans"
 ]
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.
console.log(thomsCloset[2][0]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + " and " + thomsCloset[2][0] + "!");
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// Functions
// A. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
const printGreeting = (name) => {
  return "Hello there, " + name + "!";
}
console.log(printGreeting("Slimer"));

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
const printCool = (name) => {
  return name + " is cool";
}
console.log(printCool("Captain Reynolds"));

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
const calculateCube = (num) => {
  return num * num * num;
}
console.log(calculateCube(5));

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
// console.log(isVowel("a"));
// => true
const isVowel = (char) => {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel("a"));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
const getTwoLengths = (str1, str2) => {
  return [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
const getMultipleLengths = (arr) => {
  const lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
// console.log(maxOfThree(6, 9, 1));
// => 9
const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
const printLongestWord = (arr) => {
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects
// A. Make a User Object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
const user = {
  name: "Thom",
  email: "thom@thom",
  age: 32,
  purchased: []
}
console.log(user);

// B. Update the User
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "tt@thom";
console.log(user);

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++.
user.age++;
console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Seattle";
console.log(user);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");
console.log(user);

// They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");
console.log(user);

// They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");
console.log(user);

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// E. Object within an object
user.friend = {
 name: "Grace Hopper",
 age: 85
}
console.log(user);

// Without changing the original user object, add a new property friend with a value of the object you just created.
user.friend = {
 name: "Ayla Banks",
 age: 25,
 location: "Seattle",
 purchased: []
}
console.log(user);
console.log(user.location);

// Change the friend's age to 55.
user.friend.age = 55;
console.log(user);

// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");
console.log(user);

// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte");
console.log(user);

// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);

// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased; i++) {
  console.log(user.purchased[i]);
}

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let i = 0; i < user.friend.purchased; i++) {
  console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// 1. increment the user's age by 1
// 2. make the user's name uppercase

const updateUser = () => {
  user.age++;
  user.name = user.name.toUpperCase();
}
updateUser();
console.log(user);


// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument
const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user);













































// function calc( x, y, oper) {
//  if (oper === "+") {
//   return x + y;
//  } else if (oper === "/") {
//   if (y === 0) {
//    return "division by zero"
//   }
//   return x / y;
//  } else {
//   return "operation is not good";
//  }
 
// }

// console.log(calc(4, 5, "+"))
// console.log(calc(2, 2, ))
// console.log(calc(100, 1))

// const array1 = [3, 7, 3, 8] 
// const array2 = [1, -1, 1] 
// const array3 = ["/","+","+","/"]

// const results = []
// const size = Math.min (array1.length, array2.length, array3.length)
// for (let i = 0; i < array1.length && i < array2.length && i < array3.length; i++) {
//  results.push(calc(array1[i], array2[i], array3[(array3.length -1) -i]));
// }

// console.log(results)