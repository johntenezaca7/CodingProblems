function spiralCopy(inputMatrix) {
    // your code goes here
  let res = [];

  const spiralCopy = (matrix) => {
    if(matrix.length === 0){
      return;
    }

    res = res.concat(matrix.shift()) // takes in first array from matrix;

    for(var j = 0; j < matrix.length -1; j ++){
      res.push(matrix[j].pop()); // for each array left, excluding the last one, the last ele is pushed to the res array
    }
  
    if(matrix.length !== 0){
      res = res.concat(matrix.pop().reverse()) // removes the array in the current matrixl; reverses the order and than adds it to the res array;
    }
    for(var k = matrix.length -1; k > 0; k--){
      if(matrix[k].length !== 0){
        res.push(matrix[k].shift())
      }
      }

    return spiralCopy(matrix);
  }
  spiralCopy(inputMatrix);
  return res
  }

  matrix  = [ 
            [1,    2,   3,  4,    5, 6,],
            [6,    7,   8,  9,   10, 7],
            [11,  12,  13,  14,  15, 8,],
            [11,  12,  13,  14,  15, 8,],
            [16,  17,  18,  19,  20, 9 ]  ]

console.log(spiralCopy(matrix))


// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]


