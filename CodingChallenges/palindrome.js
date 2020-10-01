//"kayak" => "kayak"
//"mom" => "mom"
//"civic" => "civic"
//"Was it a cat I saw?"
//evacaniseebeesinacave

const palindromeChecker = function(str){

    str = str.replace(/[^\w]/g, "").toLowerCase();

    let reversedStr = str.split('').reduce((item, reversed)=>{
        return reversed + item;
    }, "");

    return reversedStr === str;
}

const isPalindrome = palindromeChecker("Eva, can I see bees in a Cave??");
console.log(isPalindrome); 

//Solution#1
// const palindromeChecker = function(str){

//     let reversedStr = str.split('').reverse().join('');
//     return reversedStr === str;
// }