const assert = require('chai').assert;
const expect = require('chai').expect;

const nthFib = require('../problems/nthFib').nthFib;

describe('nthFib', () => {
    it('Should return a number', () => {
        const test  = 5;
        const result = nthFib(test);
        assert.isNumber(result);
    });
    it('Should return the sum of last two numbers in the array: [0, 1, 1, 2, 3, 5]', () => {
        const test = 5;
        const result = nthFib(test);
        expect(result).to.equal(5)
    })
})