
function steamrollArray(arr, flatArr = []) {

    arr.forEach(item => {
        Array.isArray(item) ? steamrollArray(item, flatArr) : flatArr.push(item);
    });
    return flatArr;
  }
  
  console.log(steamrollArray([1, {}, [3, [[4]]]]));