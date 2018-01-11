const nthFib = (num) => {
    if(num === 0){
        return 0;
    }
    let fib = [0, 1];
    for(let i = 2; i <= num; i++){
        fib[i] = fib[i - 2] + fib[ i - 1];
    }
    // console.log('fibs:', fib)
    return fib[num];
}

// console.log(nthFib(15))

module.exports.nthFib = nthFib;