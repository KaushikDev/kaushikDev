const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : strokes >= par + 3
    ? names[6]
    : "invalid input";
}

const result = golfScore("kaushikDev", 9);
console.log(result);
