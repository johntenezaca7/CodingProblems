function decrypt(word) {
    if(!word){
      return word;
    }
    word = word.split('');
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let firstLVal = (word.shift()).charCodeAt() - 1;
    
    let checkVal = [];
    
    for(var i = 0; i < word.length ; i++){
      let letter = word[i];
      let num = letter.charCodeAt();
      let dif;
      var newL;
      var prevDif;
      let run = true;
        while(run){ 
       
         if( i === 0){
          num = num + 26
          dif = num - firstLVal - 1;
          newL = String.fromCharCode(dif);
         } else {
          num = num + 26    
          dif = num - prevDif;  
          newL = String.fromCharCode(dif) 
         }
          
         if(abc.indexOf(newL) !== -1){      
            prevDif = num;
            checkVal.push(newL)
            run = false;
         }
       }
    }
    
    checkVal.unshift(String.fromCharCode(firstLVal));
    return checkVal.join('');
  }
  
  
  
  