//Given two strings check is one is a purutation of another

//We would first have to get a permutation of a given string
const checkTwoStrings = (str1, str2) => {
    str1 = str1.split('');
    str2 = str2.split('')

    if(str1.length !== str2.length){
        return false;
    }

    for(var i = 0; i < str1.length; i ++){
        if(str1.indexOf(str2[i]) === -1){
            return false;
        }
    };
    
    var store1 = {};
    var store2 = {};

    str1.forEach((char) => {
        if(store1[char] === undefined){
            store1[char] = 1;
        } else {
            store1[char] += 1;
        }
    });

    str2.forEach((char) => {
        if(store2[char] === undefined){
            store2[char] = 1;
        } else {
            store2[char] += 1;
        }
    })

    
    return JSON.stringify(store1) === JSON.stringify(store2)
    
    // return str1.split('').sort().join('') === str2.split('').sort().join(''); 
}

console.log(checkTwoStrings('aabc', 'abcc'))