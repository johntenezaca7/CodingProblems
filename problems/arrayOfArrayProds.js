function arrayOfArrayProducts(arr) {
    // your code goes here
    var res = [];
    
    if(arr.length === 1){
      return res;
    }
    if(arr.length === 2){
      return arr;
    }
    
    for(var i = 0; i < arr.length; i++){
        var ele = arr[i];
        var prod = 1;
        for(var j = 0; j < arr.length; j++){
            if(arr[j] !== ele){
                prod *= arr[j];
            }
        }
        res.push(prod)
    }
  
    return res;
  }

  console.log(arrayOfArrayProducts([8, 10, 2]))
//   input: [8, 10, 2]
//   output: [20, 16, 80]