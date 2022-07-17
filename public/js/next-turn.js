import info from "./info.js";
import deadCell from "./dead-cell-condition.js";
import canvasGrid from "./grid.js";

const nextTurn = (currentGrid) => {
  const nextGrid = currentGrid.map((gridArray) => [...gridArray]);
  for (let columns = 0; columns < info.canvasInfo.gridLength(); columns += 1) {
    for (let rows = 0; rows < info.canvasInfo.gridLength(); rows += 1) {
      const cell = currentGrid[columns][rows];
      for (let xCells = 0; xCells < info.canvasInfo.gridLength(); xCells += 1) {
        for (
          let yCells = 0;
          yCells < info.canvasInfo.gridLength();
          yCells += 1
        ) {
          if (
            xCells === 0 ||
            yCells === 0 ||
            xCells === info.canvasInfo.gridLength ||
            yCells === info.canvasInfo.gridLength
          ) {
            nextGrid[xCells][yCells] = 0;
          } else {
            let appendedCells = 0;
            for (let i = -1; i < 1; i += 1) {
              for (let j = -1; j < 1; j += 1) {
                if (i === 0 && j === 0) {
                  // eslint-disable-next-line no-continue
                  continue;
                } else if (cell[xCells + i][yCells + j] === 1) {
                  appendedCells += 1;
                }
              }
            }
            nextGrid[columns][rows] = deadCell(cell, appendedCells);
          }
        }
      }
      canvasGrid(columns, rows, nextGrid);
    }
  }
  return nextGrid;
};

export default nextTurn;
