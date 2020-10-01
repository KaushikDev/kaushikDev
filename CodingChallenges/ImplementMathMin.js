//console.log(Math.min("kaushikDev"));


const findMin = (...args) => {
    if(args.length === 0) return Infinity; //first check
    if((args.filter(argument => isNaN(argument))).length !==0) return NaN; //second check
    if(args.length === 1) return args[0]; //third check

    let min = args[0];
    args.forEach(argument => {
        argument < min ? min = argument : min = min;
    });

    return min;

}

const output = findMin(100, -1, 3, -2.3, "kaushikDev");
console.log(output);