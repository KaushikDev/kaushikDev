//[23, 6, 43, 78, 7, 32, 26]
//[6, 23, 43, 78, 7, 32, 26]
//[6, 23, 43, 78, 7, 32, 26]
//[6, 23, 43, 78, 7, 32, 26]
//[6, 23, 43, 7, 78, 32, 26]
//[6, 23, 43, 7, 32, 78, 26]
//[6, 23, 43, 7, 32, 26, 78]

//[6, 23, 43, 7, 32, 26, 78]
//[6, 23, 43, 7, 32, 26, 78]
//[6, 23, 7, 43, 32, 26, 78]
//[6, 23, 7, 32, 43, 26, 78]
//[6, 23, 7, 32, 26, 43, 78]
//[6, 23, 7, 32, 26, 43, 78]

const bubblesort = function(arr){

    for(let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

    }

    return arr;
}

const sortedArr = bubblesort([23, 6, 43, 78, 7, 32, 26]);
console.log(sortedArr);
