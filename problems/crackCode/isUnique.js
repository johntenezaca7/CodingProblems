//Create an algothrim that checks if string as unique chars

const checkIfUn = (string) => {
    var checker = [];
    var sep = string.slice().split('');

    for(var i = 0; i < sep.length; i++){
        if(checker.indexOf(sep[i]) === -1){
            checker.push(sep[i]);
        } else {
           return false;
        }
    }
   
    return true;
}

console.log(checkIfUn('iuhjkli'))