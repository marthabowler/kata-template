import humanReadable from "./human-readable";

test("Writes a readable version of seconds", () => {
  expect(humanReadable(0)).toBe("00:00:00");
  expect(humanReadable(5)).toBe("00:00:05");
  expect(humanReadable(86399)).toBe("23:59:59");
  expect(humanReadable(359999)).toBe("99:59:59");
});
