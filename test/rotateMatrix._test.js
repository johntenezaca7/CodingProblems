// const expect = require('chai').expect;
// const assert = require('chai').assert;

// const rotateMatrix = require('../problems/rotateMatrix').rotateMatrix;

// describe('RotateMatrix', () => {

//     it('RotateMatrix should return an Array', () => {
//         let result = rotateMatrix([[1,2,3],[4,5,6],[7,8,9]], 1);
//         assert.isArray(result);
//     });

//     it('RotateMatrix should contain an array', () => {
//         let result = rotateMatrix([[1,2,3], [4,5,6], [7,8,9]], 1)
//         assert.isArray(result[1])
//     })

//     it('RotateMatrix should return the same matrix if given 0 rounds', () => {
//         let result = rotateMatrix([[1,2,3], [4,5,6], [7,8,9]], 0);
//         expect(result).to.deep.equal([[1,2,3],[4,5,6],[7,8,9]])
//     })
// });