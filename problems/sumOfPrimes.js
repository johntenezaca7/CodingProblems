// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.
//If the  number mod otherNum is 0\
// 30 / 3 === 10, mod === 0
//30 mod 3 === 10

const isPrime = (num) => {
    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
}
// console.log(isPrime(7));

const sumOfPrime = (num) => {
   
    let sum = 0;
    for(let i = 0; i <= num; i++){
        
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfPrime(2)); //

module.exports.SumOfPrime = sumOfPrime;