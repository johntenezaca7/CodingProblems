const getPermutation = (str) => {
    if(str.length < 2){
        return str;
    };

    var permutation = [];

    for(var i = 0; i < str.length; i++){
        var char = str[i];

        if(str.indexOf(char) !== i){
            continue;
        }

        var remainingString = str.slice(0,i) + str.slice(i + 1, str.length);

        for(var subPer of getPermutation(remainingString)){
            permutation.push(char + subPer);
        }
    }

    return permutation;
}

console.log( getPermutation('xyz'))