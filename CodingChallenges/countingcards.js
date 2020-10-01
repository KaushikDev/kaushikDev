
const countCards = (arr) => {

    let count = 0;

    arr.forEach(item => {

        if(item >=2 && item <= 6){
            count++;
        }

        else if(item >= 7  && item <= 9){
            //do nothing
        }

        else{
            count--;
        }

    });

    return count > 0 ? `${count} Bet` : `${count} Hold`;

}

const betOrNot = countCards([2, 'J', 9, 2, 7]);
console.log(betOrNot);