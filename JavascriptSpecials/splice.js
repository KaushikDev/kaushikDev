//splice() is used on arrays
// consfuses most of us.
// it is used to modify the original array by adding elements or removing elements or both. Most often than not the length of the original array will be changed.
//generally has arguments where first argument is the starting index, second argument is the number of elements to be removed, and third argument or further arguments are the elements to be inserted into the array.
// arr = ["January", "Feb", "June", "July"];
// arr.splice(1, 1, "March")  => ["January", "March", "June", "July"]


const spliceIt = (arr) => {
    arr.splice(4);
    console.log(arr);
}


spliceIt(["January", "Feb", "June", "July"]);
