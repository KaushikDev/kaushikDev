//maxchar : "The quick brown fox jumps over the lazy dog"
//T = 1+1+1
//h = 1
//e = 1

const findMaxChar = function(str){
    let maxCharCount = 0;
    let maxChar = [];
    let charMap = {};

    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1;
        }
    }

    //console.log(charMap);

    for(let char in charMap){
        if(charMap[char] >= maxCharCount){
            maxCharCount = charMap[char];
            maxChar.push(char);
        }
    }

    console.log("The char which occurred most number of times is : "+ maxChar);
    console.log("The number of times the "+maxChar+ " occurred is : "+maxCharCount );

}

findMaxChar("aassaaddfffss");