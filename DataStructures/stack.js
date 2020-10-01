//Stack : LIFO :  Last In First Out

// push(3)     [3]
//push(5)       [3,5]
//push(7)       [3,5,7]
//pop()         [3,5]    X 7
//pop()         [3]      X 5
//peek()        [3]

class Stack{
    constructor(){
        this.data = [];
    }


    push(record){
        this.data.push(record);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }
}


const s =  new Stack();
s.push(5);
s.push(10);
s.push(3);
//console.log(s.data);
//console.log(s.peek());
console.log(s.pop());
console.log(s.data);