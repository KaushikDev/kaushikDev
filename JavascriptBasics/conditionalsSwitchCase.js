

const weather = (forecast) => {

    switch(forecast){

        case "sunny":
           console.log("Let's hit the beach");
           break; 
        case "drizzle":
            console.log("Let's sit at home and chill");
            break;
        case "overcast":
            console.log("Let's go for a drive");
            break;
        case "snowfall":
            console.log("Let's snuggle into the bed");
            break;
        default:
            console.log("Let's call our friends and party!!")    

    }
   
};

weather("hailstorm");