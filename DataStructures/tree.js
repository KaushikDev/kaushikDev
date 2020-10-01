
class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children = this.children.filter( node => {
            return node.data !== data;
        });
    }
}


class Tree{
    constructor(){
        this.root = null;
    }


    bfTraversal(fn){
        const arr = [this.root];

        while(arr.length){

            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    dfTraversal(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

const tree = new Tree();
const rootNode = new Node(1);
tree.root = rootNode;
rootNode.add(11);
rootNode.add(12);
rootNode.add(13);
rootNode.children[0].add(111);
rootNode.children[1].add(121);
rootNode.children[2].add(131);
//console.log(rootNode.children[0]);
let resultBF = [];
tree.bfTraversal(node => {
    resultBF.push(node.data + 5);
});
//console.log(resultBF);

let resultDF = [];
tree.dfTraversal(node => {
    resultDF.push(node.data - 5);
});

console.log(resultDF);