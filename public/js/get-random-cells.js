// eslint-disable-next-line import/no-cycle
import canvasGrid from "./grid.js";
import info from "./info.js";

const getRandomCells = () => {
  const randomCells = [];
  for (let i = 0; i < info.canvasInfo.gridLength(); i += 1) {
    randomCells[i] = [null];
    for (let j = 0; j < info.canvasInfo.gridLength(); j += 1) {
      randomCells[i][j] = Math.floor(Math.random() * 1.2);
      canvasGrid(i, j, randomCells);
    }
  }
  return randomCells;
};

export default getRandomCells;
