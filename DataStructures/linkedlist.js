//Linkedlist : Ordered collection of nodes which contains the data(record) and the reference(next) to the next node.
//Basic Properties of a Linkedlist are :
//Head : The first node in the list
//Tail : Which is the last node in the list.
//Method : insertFirst(), getFirst(), getLast(), size(), clear(), removeFirst(), removeLast(), insertLast(), getAt(index),removeAt(index), insertAt(index, data);
//Midpoint : implemented.
//Circular : 


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next === null) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
  }

  size() {
    let counter = 0;

    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.next === null) {
        previousNode.next = null;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  insertLast(data) {
    let last = this.getLast();

    if (!last) {
      this.head = new Node(data);
      return;
    }

    last.next = new Node(data);
    return;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    let previousNode = this.getAt(index - 1);
    let currentNode = this.getAt(index);
    if (!previousNode || !currentNode) {
      return;
    }

    previousNode.next = currentNode.next;
  }

  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let previousNode = this.getAt(index - 1);
    let currentNode = this.getAt(index);

    if (!currentNode && previousNode) {
      previousNode.next = new Node(data);
      return;
    }

    if (!currentNode && !previousNode) {
      this.getLast().next = new Node(data);
      return;
    }

    previousNode.next = new Node(data, currentNode);
    return;
  }
}

const midpoint = function(list){
  let slowPointer = list.head;
  let fastPointer = list.head;

  while(fastPointer.next && fastPointer.next.next){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}


const circular = function(list){

  let slowPointer = list.head;
  let fastPointer = list.head;

  while(fastPointer.next && fastPointer.next.next){
      slowPointer = slowPointer.next;
      fastPointer  = fastPointer.next.next;
      if(slowPointer === fastPointer){
        return true;
      }
  }

  return false;
}



const list = new LinkedList();
list.insertAt(0, "seventh");
list.insertAt(0, "sixth");
list.insertAt(0, "fifth");
list.insertAt(0, "fourth");
list.insertAt(0, "third");
list.insertAt(0, "second");
list.insertAt(0, "first");
list.getAt(6).next = list.getAt(0);

console.log(circular(list));



