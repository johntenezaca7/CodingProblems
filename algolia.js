var idStr = "1a3,2df,3ev,6tj,7sd,3ev,6tj,3ev,9qw,10cv,3ev";

const cleanUp = (str) => {
    str = str.split(',')
    let res = {};
    
    for(var i = 0; i < str.length; i++){
      if(!res[str[i]]){
          res[str[i]] = 1;
      }
    }
    
    return Object.keys(res).join(',');
}

console.log(cleanUp("1a3,2df,3ev,6tj,7sd,3ev,6tj,3ev,9qw,10cv,3ev"))