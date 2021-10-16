function findOddInt(arr: number[]): number {
  let counter = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      result = arr[i];
      break;
    }
  }
  return result;
}
export default findOddInt;
