var Tree = function(value){
    this.value = value;
    this.children = [];
}

Tree.prototype.addChild = function(value){
    var child = new Tree(value);
    this.children.push(child)
}

Tree.prototype.contains = function(target){

    if(this.value === target){
        return true;
    }

    for(var i = 0; i < this.children.length; i++){
        var child = this.children[i];

        if(child.contains(target)){
            return true;
        }
    }
    return false;
}

Tree.prototype.traverse = function(callback){
    callback(this.value);

    if(!this.children){ return;};

    for(var i = 0; i < this.children.length; i++){
        var child = this.children[i];
        child.traverse(callback)
    };
}

function addT(value){
  
    console.log('d')
};

var newtree = new Tree('one');

newtree.addChild('two')
newtree.addChild('three')
newtree.addChild('four')
console.log(newtree.traverse(addT))
console.log(newtree)