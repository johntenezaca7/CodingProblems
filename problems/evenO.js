// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
// Return null if there are no even-occurrence items.


// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] =>	2
// [ "cat", "dog", "dig", "cat" ]	=> "cat"

const evenOccurrence = (arr) => {
    let store = {};
    
    arr.forEach((ele, i) => {
        store[ele] === undefined ? 
            store[ele] = 1 : 
            store[ele] += 1;
    });

    for(let i = 0; i < arr.length; i++){
        if(store[arr[i]] % 2 === 0){
            return arr[i]
        }
    }
    return null;
}

// console.log(evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]))

module.exports.evenOccurrence = evenOccurrence;