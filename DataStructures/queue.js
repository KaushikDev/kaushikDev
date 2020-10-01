//Queue :  FIFO : First In First Out             [5,1]

//add(1)   , add(5)       
//remove(),                               [5]   X 1
//peek()                                    [5]

class Queue{
    constructor(){
        this.data = [];
    }

    add(record){
        this.data.unshift(record);
    }

    remove(){
       return this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }
}

const q = new Queue();

q.add(5);
q.add(15);
q.add(37);
q.remove();
q.peek();
console.log(q.remove());
