var BinaryTree = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

    BinaryTree.prototype.insert = function(value){
        if(value < this.value){
            if(this.left === null){
                this.left = new BinaryTree(value);
            } else {
                this.left.insert(value);
            }
        } else if (val > this.value){
            if(this.right === null){
                this.right = new BinaryTree(value);
            } else {
                this.right.insert(value);
            }
        } else {
            console.log('Tree already contains this value')
        }
    }

    BinaryTree.prototype.contains = function(target){
        if( target === this.value ){
            return true;
        } else if (val < this.value){
            return
        }
    }