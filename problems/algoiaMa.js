/* Algolia Solutions Engineering Screen 
 * Try to finish as much as you can within an artificial time limit. Don't worry about finishing everything :).
 * We're interested in:
 *   - Your ability to approach/talk about a problem.
 *   - Your general fluency with Javascript.
 * Feel free to look up any function signatures online. We only ask you don't look for explicit solutions.
 *
 * Instructions:
 *  A string representing a list of compressed integer arrays is given to you. Your job is to:
 *  Step1: Implement a function, `parseParams` to parse out the compressed integer arrays from `stringParams`
 *  Step2: Implement a function, `expandRanges` to decompress compressed integer arrays from Step1
 *  Step3: Implement a function, `getIntersection` to find intersection of given arrays from Step2
 *  - Add any helper functions as appropriate
 *  - Output of previous function is provided as a parameter so you can work in any order
 *  - Assume all input is correctly formed; no need to account for unexpected edge cases.
*/
const stringParams = "arr1=1-3,7,10-13,20,27-29&arr2=4-7,20-30&arr3=26,27,81";
/**
 * Takes a string input representing a list of compressed arrays separated by ampersand
 * Returns an array of strings
 * Example: "arr1=1-3,7,10-13,20,27-29&arr2=26,27,81" outputs ["1-3,7,10-13,20,27-29", "26,27,81"]
 * @param {string} stringParams
 * @returns {string[]}
 */
function parseParams(stringParams){
  let arr = stringParams.split('&')
  let results = [];
  // console.log(arr)
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === '='){
        results.push(arr[i].slice(j+1))
      }
    }
  }
  return results
}
/**
 * Takes as input an array of strings representing compressed arrays
 * Returns an array of an array of integers
 * Example: ["1-3,8,12-14","4-7"] outputs [[1,2,3,8,12,13,14], [4,5,6,7]]
 * @param {string[]} compressed lists
 * @returns {number[][]}
 */
function expandRanges(lists) {
  results = [];
  for(let i = 0; i < lists.length; i++) {
    // console.log(lists[i])
    console.log(lists[i].split(','))
    for(let j = 0; j < lists[i].split(',').length; j++) {
      if(lists[i][j] === '-') {
        let top = lists[i][j+1]
        let low = lists[i][j-1]
        for(let k = low; k < top+1; k++) {
          results.push(low);
          low++;
        }
      }else {
        // results.push(lists[i][])
      }
    }
  }
}
/**
 * Returns a single array representing the intersection of the integer lists
 * Example: [[1,2,3,4,5], [3,4,5,6], [3, 5, 8]] outputs [3, 5]
 * @param {number[]} lists where each list has unique numbers
 * @returns {number[]}
 */
function getIntersection(listOfLists) {
  // Complete me
}
// Run code here:
const compressedLists = parseParams(stringParams);
// console.log(compressedLists);
const compressedListsExpectedOutput = [ 
  '1-5,8,11-14,18,20,26-29', 
  '3-7,20-30', 
  '26,27,81' 
];
const lists = expandRanges(["1-3,8,12-14","4-7"]);
// console.log(lists);
const listsExpectedOutput = [ 
  [ 1, 2, 3, 4, 5, 8, 11, 12, 13, 14, 18, 20, 26, 27, 28, 29 ],
  [ 3, 4, 5, 6, 7, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ],
  [ 26, 27, 81 ] 
];
const intersection = getIntersection(lists);
// console.log(intersection);
const intersectionExpectedOutput = [ 
  [27]
];