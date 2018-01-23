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
        } else if (target < this.value){
            return
        }
    }


//      console.log('arr', arr)
//   var start = 0;
//   var end = arr.length - 1
//     var mid = Math.floor((end - start)/ 2);
//     var midValue = arr[mid];
//   console.log('mid',mid)
//   console.log('midValue', midValue)
//     if(mid === midValue){
//       return mid;
//     } else if( midValue > mid && arr.length > 1){
//       console.log('go right')
//       return indexEqualsValueSearch(arr.splice(mid, arr[arr.length -1]))
//     } else if( midValue < mid && arr.length > 1){
//       console.log('go left')
//       return indexEqualsValueSearch(arr.splice(0, mid))
//     } else {
//       return -1
//     }

//     1512ms

//     Time: 486ms