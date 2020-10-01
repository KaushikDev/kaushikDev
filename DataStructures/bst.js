

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        if(data < this.data && this.left){
            this.left.insert(data);
        }

        else if(data < this.data){
            this.left = new Node(data)
        }

        if(data > this.data && this.right){
            this.right.insert(data);
        }

        else if(data > this.data){
            this.right = new Node(data);
        }
    }

    contains(data){
        if(data === this.data){
            return this;
        }

        if(data < this.data && this.left){
          return this.left.contains(data);
        }else if(data > this.data && this.right){
            return this.right.contains(data);
        }

        return null;
    }

}

const isBST = (node, min=null, max=null)=>{
    if(max !== null && node.data > max){
        return false;
    }

    if(min !== null && node.data < min){
        return false;
    }

    if(node.left && !isBST(node.left, min, node.data)){
        return false;
    }

    if(node.right && !isBST(node.right, node.data, max)){
        return false;
    }

    return true;
}
const root = new Node(25);

root.insert(76);
root.insert(34);
root.insert(15);
root.insert(80);
root.right.right.right = new Node(15);
console.log(root);
