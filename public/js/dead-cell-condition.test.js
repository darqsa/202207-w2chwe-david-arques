import deadCell from "./dead-cell-condition";

describe("Given the deadCell function", () => {
  describe("When it recieves 2", () => {
    test("Then it should return 1", () => {
      const number1 = 2;
      const expectedResult = 1;

      const result = deadCell(number1);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it recieves 0", () => {
    test("Then it should return 0", () => {
      const number1 = 0;
      const expectedResult = 0;

      const result = deadCell(number1);

      expect(result).toBe(expectedResult);
    });
  });
});
