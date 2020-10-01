// 0,1,1,2,3,5,8.....n

//MEMOIZATION

const memoization = function(fn){
const cache = {};

return function(...args){
    if(cache[args]){
        return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
};

};


const fibonacci = memoization(function(n){

    if(n < 2){
        return n;
    }

    else {
        console.log("another function call...");
        return fibonacci(n-1) + fibonacci(n-2);
    }

});

fibonacci(7);

//Solution#1 : (Iterative)
// const fibonacci = function(n){

//     const fib = [0,1];

//     for(let i=2; i<=n; i++){

//         fib.push(fib[i-1]+fib[i-2]);

//     }
//     //console.log(fib);
//     console.log(fib[fib.length - 1]);

// }