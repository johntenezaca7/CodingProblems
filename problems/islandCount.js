const islandCount = (mapStr) => {  
    mapStr = mapStr.split('\n');   console.log('split', mapStr);
    var islandCounts = 0;
    var subArr = mapStr.map(eachArr => eachArr.split('')); 
    // console.log('subarr at 1', subArr[1].length) into a matrix with each sub array is each line split on every char   
    console.log('SubArr', subArr)
    for(var i = 0; i < subArr.length; i++){console.log('------------------')
        for(var j = 0; j < subArr[i].length; j++){
console.log('inside for loop j, index[i][j] =', subArr[i][j])
            if(subArr[i][j] === '0'){
                if( i === 0 && j === 0) {
                    if(subArr[i][j + 1] === '.' && subArr[i + 1][j] === '.'){
                        islandCounts++
                    }
                } else if ((j === 0 || subArr[i][j - 1] === '.') &&
                           ( i === 0 || subArr[i - 1][j] === '.')){
                        islandCounts++
                }
            }
        }
    }
    return islandCounts
}
console.log('island')
console.log(".0...\n.00..\n....0")
console.log('-----------------------')
console.log(islandCount(".0...\n.00..\n....0"))