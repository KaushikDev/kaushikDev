//for..in and for...of
//for...in is used for counting the enumerables.
//for...of is used for counting the iterables.


/*suppose I have an object : 
car = {
make : 2001,
model : ford,
color: white
}*/ //  USE for...in loop


// const scores = [32, 45, 54, 12, 23, 100];
//USE for...of loop
// let myName = "kaushikDev" //USE the for...of loop


// const car = {
//     make : "honda",
//     model : 2001,
//     color: "white"
// };

// for(let prop in car){
//     console.log(prop);
// }


// const scores = [23, 32, 45, 12, 33];

// for(let score of scores){

//     console.log(score);
// }

// for(let index in scores){
//     console.log(index);
// }

const myName = "kaushikDev";

for(let char of myName){
    console.log(char);
}