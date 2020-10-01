
// "hey kaushikdev, how are you?" === "Hey Kaushikdev, How Are You?"


const capitalize = function(str){

    let capitalizedArr = [];

    str.split(' ').forEach(item => {
        capitalizedArr.push(item.charAt(0).toUpperCase() + item.slice(1));
    });

    console.log(capitalizedArr.join(' '));

};


capitalize("hey kaushikdev, how are you?")