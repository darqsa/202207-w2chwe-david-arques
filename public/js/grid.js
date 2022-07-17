import getRandomCells from "./get-random-cells.js";
import info from "./info.js";

const canvasGrid = () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  for (let columns = 0; columns < info.canvasInfo.gridLength(); columns += 1) {
    for (let rows = 0; rows < info.canvasInfo.gridLength(); rows += 1) {
      const cell = getRandomCells[columns][rows];
      ctx.beginPath();
      ctx.rect(
        columns * info.canvasInfo.cellProportion(),
        rows * info.canvasInfo.cellProportion(),
        info.canvasInfo.cellProportion(),
        info.canvasInfo.cellProportion()
      );
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.strokeStyle = "#8B948D";
      ctx.stroke();
    }
  }
};
export default canvasGrid;
