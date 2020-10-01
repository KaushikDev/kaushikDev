// n => n * n-1 * n-2 * n-3 ... 1

const factorial = function(n){

    if(n < 0){
        return "The Input is Invalid!!";
    }

    else if(n <= 1) {
        return 1;
    }

    else{
        return n * factorial(n-1);
    }

}





console.log(factorial(-5));

//Solution#1
// const factorial = function(n){

//     let result = n;

//     for(let  i=n; i>1; i--){
//         result = result * (i-1);
//     }

//     return result;

// }