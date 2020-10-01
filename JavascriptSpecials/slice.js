//slice(start, end) 
//arrays
//starting index
//end index
// makes a copy of the original array but a sliced version of it.
//it begins slicing from the start index and continues till the end index(excluding end index)
//slice(1, 4)

const sliceIt = (arr) => {
    return arr.slice(1, 0);
};


const output = sliceIt(["kaushikDev", "John", "Adam", "Erica", "Rebecca", "Smith"]);
console.log(output);