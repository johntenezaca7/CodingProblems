var LinkedList = function() {
    this.head = null;
    this.tail = null;
  };

    LinkedList.prototype.addToTail = function(value){
    const newTail = new Node(value);
    
    if(!this.head){
        this.head = newTail;
    }
    if(this.tail){
        this.tail.next = newTail;
    }
    this.tail = newTail;
};

    LinkedList.prototype.removeHead = function() {
        if(this.head === null ){
            return null;
        }
        let currentHead = this.head;
        this.head = this.head.next;
        this.head.value = this.head.next.value
        return currentHead.value;
    };

    LinkedList.prototype.contains = function(target){
        var node = this.head;

        while(node){
            if(node.value === target){
                return true;
            }
            node = node.next;
        };

        return false;
    };

  
var Node = function(value){
    this.value = value;
    this.next = null;
  };
  
// var testList = new LinkedList();

// testList.addToTail(5);
// testList.addToTail(8);
// testList.addToTail(3);
// testList.addToTail(1);

// const oldHead = testList.removeHead();
// const newHead= testList.head.value;
// console.log('llllllll',oldHead);
// console.log('dss', newHead)


module.exports.Node = Node;
module.exports.LinkedList = LinkedList;