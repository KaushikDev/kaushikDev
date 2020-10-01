//split
// let myString = "London, Meerut, Bangalore, Mumbai, Kolkata, Patna, Orissa";
// let myArray = myString.split(", ");
// console.log(myArray);
// console.log(myArray[myArray.length - 1]);

// let myArray = ["kaushikDev", "BradTraversy", "WebDev", "freeCodeCamp", "AniaKubow"];
// let myString = myArray.join("");
// console.log(myString);

// push, pop: works on the end part of the arrays
// unshift and shift : works on the starting part of the array

let myArray = ["Mango", "Guava", "Banana", "Watermelon"];
// myArray.push("Strawberry");
// myArray.unshift("Avocado");
//myArray.pop();
myArray.shift();
myArray.pop();
myArray.push("tomato");
console.log(myArray);
