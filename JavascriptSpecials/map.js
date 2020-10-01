//map function

// const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

// const testMap = ()=> {

//     const newArr = arr.map( (item)=>{
//         return Math.sqrt(item);
//     } );

//     return newArr;
// };


// console.log(testMap());


const activity = ["sing", "play", "code", "dance", "ride"];

const actor = activity.map(item => {
    return item[item.length-1] === "e" ? item+"r" : item+"er";
});


console.log(actor);
console.log(activity);
