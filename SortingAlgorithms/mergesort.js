//[34, 36, 68, 5, -67, -45, 0, 35, 23, 19,98, 89]
// Step 1 : Divide our unsorted array into two halves, vis. left and right.


const sort = function(arr){
    if(arr.length === 1){
        return arr;
    }

    let center = Math.floor(arr.length/2);
    let left = arr.slice(0, center);
    let right =  arr.slice(center);

    return merge(sort(left), sort(right));

}

const merge = function(left, right){

    let merged = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            merged.push(left.shift());
        }
        else{
            merged.push(right.shift());
        }
    }

    return [...merged, ...left, ...right];
  

}


const sortedArr = sort([34, 36, 68, 5, -67, -45, 0, 35, 23, 19,98, 89]);
console.log(sortedArr);
