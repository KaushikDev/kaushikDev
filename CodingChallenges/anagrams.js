// "Tom Marvolo Riddle" => "I am Lord Voldemort"


const anagram = function(strA, strB){

    let charMapA = makeCharMap(strA);
    let charMapB = makeCharMap(strB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length){
        return false;
    }

    for(let char in charMapA){
        if(charMapA[char] !== charMapB[char]){
            return false;
        }
    }

    return true;

}

const makeCharMap = function(str){

    const charMap = {};

    for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
        charMap[char] ? charMap[char]++ :  charMap[char] = 1;
    }

    return charMap;
}

console.log(anagram("Fairy, Tales!!", "Rail, Safety"));

//makeCharMap("Lord Voldemort");


//Solution#1
// const anagram = function(strA, strB){

// return clearString(strA) === clearString(strB);

// }

// const clearString = function(str){

//    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// console.log(anagram("Fairy, Tales", "Rail Safety!!"));