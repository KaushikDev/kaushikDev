// if else conditional statement


// const weather = (forecast) => {

//   if(forecast === "sunny"){
//     console.log("Let's go to the beach");
//   }
//   else{
//     console.log("Let's stay at home and chill.")
//   }
// };


// weather("rainy");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//0-39 fail
//40-59 third division
//60-79 second division
//80-100 first division



const markSheet = (marks) => {

  if(marks <=39){
    console.log("You have failed the exam.");
  }

  else if(marks >= 40 && marks <=59){
    console.log("You got third division");
  }

  else if(marks >=60 && marks <= 79){
    console.log("You got the second division");
  }

  else {
    console.log("Congrats!! You got the first division.")
  }

};

markSheet(81);