const arr = ["cat", "dog", "racoon"];

const isItThere = (val, index) => {
    return arr.includes(val, index);
}

const output = isItThere("dog", 2);
console.log(output);