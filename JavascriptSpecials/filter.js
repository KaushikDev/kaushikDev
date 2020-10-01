// filter method.

 const arr = ["kaushikDev", "John", "constantine", "john wick", "devil", "scorpionking", "neha"];

const filteredArr = arr.filter((item) => {
   return (item.length < 6);
});

    console.log(filteredArr);