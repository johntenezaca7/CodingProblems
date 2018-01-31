



function encrypt(word){
    word = word.split('');
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // Takes first letter and converts it to its ASCII Value(number) and adds 1;
    let firstL = word.shift().charCodeAt() + 1; 
    
    //Takes the word array, for each element returns 
    //the ASCII value and saves it into a a new array
    let nums = word.map((ele) => { 
      return ele.charCodeAt();
    });
    
    let newNums = [];// will contain a set of new numbers
    let prevNum;
    nums.forEach((ele, i) => {
      if(i === 0){
        ele = ele + firstL;
        newNums.push(ele);    
      } else {
        prevNum = newNums[i - 1];
        newNums.push(ele + prevNum);
      }
    })
    
    let newVals = [];
    
    for(var i = 0; i < newNums.length; i++){
      let num = newNums[i];
      let char = String.fromCharCode(num);
      let run = true;
      let idx;
      
      while(run){
        if(num - 26 > 0){
         
          num = num - 26;
          char = String.fromCharCode(num);
          idx = abc.indexOf(char)
          
          if(abc[idx]){
            run = false;
          }
        }
      }
     newVals.push(abc[idx])
    }
    
    newVals.unshift(String.fromCharCode(firstL));
    return newVals.join(''); 
  } 
  
  console.log(encrypt('John'))