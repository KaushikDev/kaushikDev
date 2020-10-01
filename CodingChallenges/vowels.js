// "The quick brown fox jumps over the lazy dog" === 11

const findVowels = function(str){

    let vowels = str.toLowerCase().match(/[aeiou]/gi);

    return vowels.length;
}



console.log(findVowels("The quick brown fox jumps over the lazy dog."));

//Solution#1
// const findVowels = function(str){
//     let counter = 0;

//     let vowels = "aeiou";

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             counter++;
//         }
//     }

//     return counter;

// }
