import info from "./info.js";

const canvasGrid = (columns, rows, grid) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const cell = grid[columns][rows];
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
};
export default canvasGrid;
