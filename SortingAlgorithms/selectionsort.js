//[32, 23, 0, 67, -56, 45]
//After First Itertaion : [-56, 23, 0, 67, 32, 45]


const selectionsort = function(arr){

    for(let i=0; i<arr.length;i++){ // i=1
        let minIndex = i;           //minIndex = 1

        for(let j=i+1;j<arr.length;j++){ //j = 2

            if(arr[j] < arr[minIndex]){
                minIndex = j; //minIndex = 1
            }

        }

        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;

}

const sortedArr = selectionsort([32, 23, 0, 67, -56, 45]);
console.log(sortedArr);