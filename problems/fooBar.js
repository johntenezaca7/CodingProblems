
module.exports ={
    fooBar: (num, foo, bar) => {
        let result = [], i = 0;
        for( i ; i < num; i ++){
            if( i % foo === 0 && i % bar === 0){
                result.push({foobar: i});
            } else {
                if(i % foo === 0 && i % bar !== 0){
                    result.push({foo: i});
                }
                if(i % bar === 0 && i % foo !== 0){
                    result.push({bar: i});
                }
            }
        }
        return result;
    }
}
