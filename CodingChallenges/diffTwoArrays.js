// arr1 = [1, 2, 3, 4, 5]
//arr2 = [2, 3, 4, 5, 6, 7];

// [1, 6, 7]



const diff = (arr1,  arr2) => {

   const filteredArray =  [...arr1, ...arr2].filter(item => {
        if(!arr1.includes(item) || !arr2.includes(item)){
            return item;
        }
    });

    return filteredArray;
};



console.log(diff(["apples", "mangoes", "bananas", "pineapples"], ["bananas", "strawberries"]));