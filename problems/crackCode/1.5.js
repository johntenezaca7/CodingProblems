const oneAway = (str1, str2) => {
    if(str1.length !== str2.length){
        if(str1.length > str2.length){
            for(var i = 0; i < str1.length; i++){
                str1.slice(i, 1);
                console.log('removed', str1)
                if(str1 === str2){
                    return true
                }
            }
        } else if( str2.length > str1.length){

        }
    }
}

console.log(oneAway('pale', 'ple'))