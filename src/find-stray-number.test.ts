import findStray from "./find-stray-number";

test("Finds the stray number in an array of numbers", () => {
  expect(findStray([1, 2, 2, 2, 2])).toBe(1);
  expect(findStray([8, 8, 8, 8, 8, 1])).toBe(1);
  expect(findStray([17, 17, 17, 3, 17])).toBe(3);
  expect(findStray([1, 1, 1, 1, 1])).toBe(NaN);
});
