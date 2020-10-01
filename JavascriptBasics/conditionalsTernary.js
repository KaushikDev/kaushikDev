//ternary operator

// const weather = (forecast) => {

//     forecast === "sunny" ? console.log("Let's go to the beach") : console.log("Let's stay at home and chill");

// };

// weather("rainy");

const markSheet = (marks) => {
  marks <= 39
    ? console.log("You have failed the exam.")
    : marks >= 40 && marks <= 59
    ? console.log("You got third division")
    : marks >= 60 && marks <= 79
    ? console.log("You got the second division")
    : console.log("Congrats!! You got the first division.");
};


markSheet(12);