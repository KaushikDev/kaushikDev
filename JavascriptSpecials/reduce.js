//reduce() ===> reduce an array on which it is applied to a single output.


// const arr = [2 , 5, 7, 9, 13];

// const reducedValue = arr.reduce((accumulator, currentValue) => {

// });

// if initial value is provided : accumulator's value at beginning would be equal to initial value, and currentValue would be equal to value at 0th index.

//if initial value is not provided : accumulator === value at 0th index and currentValur would be equal to the value at 1st index, 

const arr1 = ["book1", "book2", "book3", "book4", "book5"];
const arr2 = ["book6", "book7", "book8", "book9", "book10"];


const reducedValue = arr2.reduce((acc, curr)=>{
   acc.push(curr);
   return acc;
}, arr1);

console.log(reducedValue);