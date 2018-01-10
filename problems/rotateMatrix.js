// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.

// 4x4 MATRIX EXAMPLE:

// [ [ 1, 2, 3, 4],
// [ 5, 6, 7, 8],
// [ 9, “A”,”B”,”C”],
// [“D”,”E”,”F”,”G”] ]

// Rotated:

// [ [“D”, 9, 5, 1],
// [“E”, “A”, 6, 2],
// [“F”,”B”, 7, 3],
// [“G”,”C”, 8, 4] ]

const rotate = (matrix, rounds) => {
            if( rounds === 0 ){ 
                return matrix
            }
            let height = matrix.length, width = matrix[1].length, rotated = [];
            for(let i = 0 ; i < width; i++){
                rotated[i] = [];    //creates the length of new matrix
                for(let j = 0; j < height; j ++){
                    rotated[i][j] = matrix[height-1-j][i]; //creates width while filling up each array inside the matrix with
                }
            }
            return rotate(rotated,rounds - 1);
    }

    rotate([[1,2,3,4,],
            [5,6,7,8],
            [9, "A","B","C"],
            ["D", "E", "F", "G"]],5)



module.exports.rotateMatrix = rotate;