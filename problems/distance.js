// function deletionDistance(str1, str2) {
//     // your code goes here
//     if(str1 === str2){
//       return 0;
//     } 
//     var res = [];
    
//     var short = str1.length < str2.length ? str1.split('') : str2.split('');
//     var long  = str1.length > str2.length ? str1.split('') : str2.split('');
    
    
//     while(short.length < long.length){
//       short.unshift('1');
//     }
    
//     /* allocate a 2D array with str1Len + 1 rows and str2Len + 1 columns
//       let col = new Array(str1.length +1)
//       let row = new Array(str2.length +1)
//       let memo = [];
//       for (var i = 0; i < col.length; i++) {
//         memo[i] = new Array(row.length);
//       }
      
//       */
//     //res[i]=new Array(long.length)
//     console.log(short)
//     console.log(long)
//     //short =['1', 'hit'] instead of ['1', h , i, t]
    
//     for(var i = 0; i < short.length; i++){
//        res[i] = new Array(long.length )
//     }
//     console.log('res so far', res)
    
//     for(var x = 0; x < short.length; x++){
//       for(var k = 0; k < long.length; k++){
//         console.log('inside for loop', res)
//         if(short[x] === "1"){
//            res[x][k] = k + 1
//         }
//         else if(short[x] === long[k]){
//           res[x][k] = res[x -1][k-1];
//         } else {
//           res[x][k] = Math.min(res[x][k -1], res[x-1][k]) + 1;
//         }
//       }
//     }
//     var ans = res[short.length][long.length -1];
    
//     if(ans > short.length){
//       return str1.length + str2.length;
//     }
    
//     return ans;
//   }
  
//   console.log(deletionDistance("heat", "hit")===3)
  
  /*
  function deletionDistance(str1, str2) {
      if(str1==="") return str2.length
      if(str2==="") return str1.length
      if(str2===str1) return 0
      if (str1.length < str2.length){
            let tmpStr = str1
            str1 = str2
            str2 = tmpStr
      }
      
      let str1Len = str1.length
      let str2Len = str2.length
      
      // allocate a 2D array with str1Len + 1 rows and str2Len + 1 columns
      let col = new Array(str1.length +1)
      let row = new Array(str2.length +1)
      let memo = [];
      for (var i = 0; i < col.length; i++) {
        memo[i] = new Array(row.length);
      }
    
      for (var i=0; i<str1Len; i++) {
          for (var j = 0; j < str2Len; j++) {
              if (i == 0) {
                  memo[i][j] = j
              }
              else if (j == 0) {
                  memo[i][j] = i
              }
              else if (str1[i-1] == str2[j-1]){
                  memo[i][j] = memo[i-1][j-1]
              }
              else {
                  memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1])
              }
          }
      }
      console.log('memo after', memo)
      if(memo[str1Len-1][str2Len-1]>str1.length){
        return str1.length+str2.length
      }
      return memo[str1Len-1][str2Len-1]
  }
  
  
  
  */
  
  /*
  res[row][col]
  res[i][j]
  you have an empty 2 d array first
  two arrays on top of each other
  and you fill out how much they have in common or how much you have to erase and push this in into the empty cell into the empty 2 d array
  
  //BUFFER: if your short[x]==""  : k+1
  //two patterns
  if the letters are equal: res[x-1][k-1]
  if the two letters are not equal: Minimum of ( res[x][k-1] or res[x-1][k] ) + 1
     
         E A 
    ""   1 2 
    H    2 3 
    I    3 4 
    
    
       "" D O G
    F  1  2 3 4
    R  2  3 4 5
    O  3  4 3 4
    G  4  5 4 3
  */  
  
  /*
  one clue:
  short string and a long string
      you can use this to match the length of both strings
      by maybe adding something to the short string so that it matches the long string?
  */
  
  
  /*
  Input:
   
  "heat", "hit"
  Expected:3
  
  Input:
   
  "", "hit"
  Expected:3
  
  
  Input:
   
  "neat", ""
  Expected: 4
  
  Input:
   
  "ab", "ba"
  Expected: 2
  */
  
//   input:  str1 = "dog", str2 = "frog"
// output: 3

// input:  str1 = "some", str2 = "some"
// output: 0

// input:  str1 = "some", str2 = "thing"
// output: 9

// input:  str1 = "", str2 = ""
// output: 0


// function deletionDistance(str1, str2) {
//     if(str1 === "") return str2.length;
//     if(str2 === "") return str1.length;
//     if(str2 === str1) return 0;

//     if (str1.length < str2.length){
//           let tmpStr = str1;
//           str1 = str2;
//           str2 = tmpStr
//     }
    
//     let str1Len = str1.length
//     let str2Len = str2.length
    
//     // allocate a 2D array with str1Len + 1 rows and str2Len + 1 columns
//     let col = new Array(str1.length )
//     let row = new Array(str2.length )
//     let memo = [];
//     for (var i = 0; i < col.length; i++) {
//       memo[i] = new Array(row.length);
//     }
//   console.log('First \n', memo)
//     for (var i=0; i<str1Len; i++) {
//         for (var j = 0; j < str2Len; j++) {
//             if (i === 0) {
//                 memo[i][j] = j
//             }
//             else if (j === 0) {
//                 memo[i][j] = i
//             }
//             else if (str1[i-1] === str2[j-1]){
//                 memo[i][j] = memo[i-1][j-1]
//             }
//             else {
//                 memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1])
//             }
//         }
//     }
//     console.log('after ')
//     memo.forEach(el => console.log(el))
//     if(memo[str1Len-1][str2Len-1]>str1.length){
//       return str1.length+str2.length
//     }
//     return memo[str1Len-1][str2Len-1]
// }
//
// console.log(deletionDistance('tenezaca', 'ten'))


// let deletionDistance = (str1, str2) => {
//     let sameLen1 = str1.split('').filter(char => str2.split('').includes(char));
//     let sameLen2 = str2.split('').filter(char => str1.split('').includes(char))

//     console.log("1",sameLen1)
//     console.log("2", sameLen2)
//     return "test"
// }



function deletionDistance(str1, str2) {
    let matchLength = 0;
    let i = 0; // index for keep track of str1
    let j = 0; // index for keep track of str2
    let curMatch = 0;
    while(i < str1.length) {
      let curMatch = 0;
      j = 0;
      while(j < str2.length) {
        if (str1[i] === str2[j]) {
          curMatch++;
          i++;
          j++;
        } else {
          j++;
        }
      }
      i++;
      if (curMatch > matchLength) {
        matchLength = curMatch;
      }
    }
    
    return (str1.length - matchLength) + (str2.length - matchLength);

let deletionDistance = (str1, str2) => {
    let short, long;

    if(str1.length < str2.length){
        short = str1;
        long = str2;
    } else {
        short = str2;
        long = str1
    }


    let commonChar = []
    short = short.split('')

    for(var i = 0; i < long.split('').length; i++){
        if(long.includes(short[i])){
            commonChar.push(short[i])
        }
      }
    


    console.log('common',commonChar)
    let total = str1.length + str2.length;
    console.log('total', total);
    let sub = 2 * commonChar.length;
    console.log('sub', sub)
    return total - sub
   }

console.log(deletionDistance('ab', 'ba'))