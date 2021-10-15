/**
 * This function returns the off number in the array
 * @param {number[]} arr
 * @return {any} result
 */

function findStray(arr: number[]): number {
  const result = arr.find(
    (value) => arr.indexOf(value) === arr.lastIndexOf(value),
  );
  if (result === undefined) {
    return NaN;
  }
  return result;
}

export default findStray;
