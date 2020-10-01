// Celcius to fahreinheit : (T * 9/5) + 32
// Fahreinheit to Celcius : (T - 32) * 5/9

// condition ? do this : else do this

const tempConverter = (temp, unit='c') => {
   return unit === 'c' ? (temp * 9/5) + 32 : (temp - 32) * 5/9;
}


console.log(tempConverter(0, 'f'));