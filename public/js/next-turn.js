import info from "./info.js";
import getRandomCells from "./get-random-cells.js";
import deadCell from "./dead-cell-condition.js";

const nextTurn = () => {
  const nextGrid = getRandomCells.map((gridArray) => [...gridArray]);
  for (let columns = 0; columns < info.canvasInfo.gridLength(); columns += 1) {
    for (let rows = 0; rows < info.canvasInfo.gridLength(); rows += 1) {
      const cell = getRandomCells[columns][rows];
      let appendedCells = 0;
      for (let i = -1; i < 1; i += 1) {
        for (let j = -1; j < 1; j += 1) {
          if (i === 0 && j === 0) {
            // eslint-disable-next-line no-continue
            continue;
          } else if (cell[columns + i][rows + j] === 1) {
            appendedCells += 1;
          }
        }
      }
      nextGrid[columns][rows] = deadCell(appendedCells);
    }
  }
};

export default nextTurn;
