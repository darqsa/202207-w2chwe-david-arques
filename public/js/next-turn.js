import canvasGrid from "./grid.js";
import getRandomCells from "./get-random-cells.js";
const nexTurn = grid.map((gridArray) => [...gridArray]);
for (let columns = 0; columns < gridLength; columns += 1) {
  for (let rows = 0; rows < gridLength; rows += 1) {
    const cell = randomCells[columns][rows];
    for (let i = -1; i < 1; i += 1) {
      for (let j = -1; j < 1; j += 1) {
        if (i === 0 && j === 0) {
          // eslint-disable-next-line no-continue
          continue;
        } else {
          if (cell === 1) {
          }
        }
      }
    }
  }
}
