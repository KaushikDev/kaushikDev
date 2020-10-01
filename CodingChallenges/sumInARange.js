// [100, 9] 


const sum = (arr) =>{
    let total = 0;

    arr[0] > arr[1] ? [max, min] = arr : [min, max] =  arr;
    
    for(let i=min; i<= max; i++){
        total += i;
    }


    return total;
};


console.log(sum([4, 1]));