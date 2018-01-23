const binSearch = (array, target) => {
    console.log('arr', array)
    let mid = Math.floor(array.length / 2);
    console.log('mid', mid)
    if(array[mid] === target){
        return array[mid];
    } else if( target > array[mid] && array.length > 1){
        return binSearch(array.splice(mid, array[array.length -1]), target);
    } else if( target < array[mid] && array.length > 1){
        return binSearch(array.splice(0, mid), target);
    } else {
        return -1
    }
}

var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23]

console.log(binSearch(test, 2))