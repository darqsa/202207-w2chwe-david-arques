const canvasGrid = (canvasSize) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const cellProportion = canvasSize / 60;
  const gridLength = canvasSize / cellProportion;

  for (let columns = 0; columns < gridLength; columns += 1) {
    for (let rows = 0; rows < gridLength; rows += 1) {
      ctx.beginPath();

      ctx.fillRect(
        columns * cellProportion,
        rows * cellProportion,
        cellProportion,
        cellProportion
      );
      ctx.stroke();
      ctx.fill();
    }
  }
};
export default canvasGrid;
