import deadCell from "./dead-cell-condition";

describe("Given the deadCell function", () => {
  describe("When it recieves 0 and 3", () => {
    test("Then it should return 1", () => {
      const number1 = 0;
      const number2 = 3;
      const expectedResult = 1;

      const result = deadCell(number1, number2);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it recieves 1 and 2", () => {
    test("Then it should return 1", () => {
      const number1 = 1;
      const number2 = 2;
      const expectedResult = 1;

      const result = deadCell(number1, number2);

      expect(result).toBe(expectedResult);
    });
  });
  describe("When it recieves 1 and 4", () => {
    test("Then it should return 0", () => {
      const number1 = 1;
      const number2 = 4;
      const expectedResult = 0;

      const result = deadCell(number1, number2);

      expect(result).toBe(expectedResult);
    });
  });
});
