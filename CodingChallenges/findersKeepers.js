

const findElement = (arr, func) => {
    
   let filteredArray = arr.filter(item => {
        if(func(item)){
            return item;
        }
    });

   return filteredArray.length === 0 ? undefined : filteredArray[0];
}

const test = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
console.log(test);