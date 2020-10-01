//function("Hello World")  === dlroW olleH

function reverse(str){

    let reversedStr = str.split('').reduce( (reversed, character)=> {
            return character+reversed;
    }, "");

    console.log(reversedStr);

}



reverse("kaushikDev is a beginner developer who is trying real hard");

// function reverse(str){
//     let tempArr = [];

//     str.split('').forEach( item => {
//         tempArr.unshift(item);
//     });
//    console.log(tempArr.join(''));
// }


// function reverse(str){
//     console.log(str.split('').reverse().join(''));
// }