import findOddInt from "./find-odd-int";

test("Finds the integer in an array which is repeated an odd number of times", () => {
  expect(findOddInt([1, 1, 1, 2, 3, 3, 2])).toBe(1);
  expect(
    findOddInt([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  ).toBe(5);
  expect(findOddInt([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10);
});
