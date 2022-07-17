import canvasGrid from "./grid.js";
import info from "./info.js";
import getRandomCells from "./get-random-cells.js";

const nexTurn = grid.map((gridArray) => [...gridArray]);
for (let columns = 0; columns < info.canvasInfo.gridLength(); columns += 1) {
  for (let rows = 0; rows < info.canvasInfo.gridLength(); rows += 1) {
    const cell = getRandomCells[columns][rows];
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
