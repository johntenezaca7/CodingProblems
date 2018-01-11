const assert = require('chai').assert;
const expect = require('chai').expect;

const SumOfPrimes = require('../problems/sumOfPrimes').SumOfPrime;

describe('SumOfPrimes', () =>{
    it('should return a number', () => {
        let result = SumOfPrimes(10);
        assert.isNumber(result);
    });
    it('should return 17', () => {
        let result = SumOfPrimes(10);
        expect(result).to.equal(17);
    });
    it('should return 2 when 2 is passed', () => {
        let result = SumOfPrimes(2);
        expect(result).to.equal(2);
    });
})