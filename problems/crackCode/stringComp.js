const stringComp = (str) => {
   
    var result = '';
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i + 1]){
            count++
        } else {
            count++
            result += str[i] + count;
            count = 0;
        }
    }
    return result
}

console.log(stringComp('abbcccabc'))