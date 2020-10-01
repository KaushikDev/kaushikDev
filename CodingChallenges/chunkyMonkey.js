function chunkArrayInGroups(arr, size) {
     let finalArr = [];
     let cutLength = 0;

     while(cutLength < arr.length){
          finalArr.push(arr.slice(cutLength, cutLength+size));
          cutLength += size;
     }

     return finalArr;
   }
   
   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
   