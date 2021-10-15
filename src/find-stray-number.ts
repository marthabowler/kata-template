/**
 * 
 * @param {number[]} arr 
 * @return {number} value
 */

function findStray(arr: number[]): number {
return arr.find(value => arr.indexOf(value) === arr.lastIndexOf(value))
}

export default findStray;
