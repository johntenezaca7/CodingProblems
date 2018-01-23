const spiralCopy = (inputMatrix) => {
  let res = [];

  const makeSpiralCopy = (matrix) => {
    console.log('before \n', matrix)
    if(matrix.length === 0){
      return;
    }
    res = res.concat(matrix.shift());

    for(var i = 0; i < matrix.length -1; i++){
        res.push(matrix[i].pop());
    }

    res = res.concat(matrix.pop().reverse());

    for(var j = matrix.length -1; j > 0; j--){
      res.push(matrix[j].shift());
    }
    console.log('after', matrix)
    return makeSpiralCopy(matrix);
  }
  makeSpiralCopy(matrix);
  return res;
}

  matrix  = [ 
            [1,    2,   3,  4,    5, ],
            [6,    7,   8,  9,   10],
            [11,  12,  13,  14,  15],
            [16,  17,  18,  19,  20]  ]

console.log(spiralCopy(matrix))

function getIndicesOfItemWeights(arr, limit) {
  // your code goes here
  var sum = {};
  for(var i = 0; i < arr.length; i++){
    var dif = limit - arr[i]
    sum[dif] = i
  
    if(sum[arr[i]] !== undefined){
      return [i, sum[arr[i]]]
    }
  }
      
  
  
  return []
}


// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]


