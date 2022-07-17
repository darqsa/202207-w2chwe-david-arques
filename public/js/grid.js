const canvasGrid = (canvasSize) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const randomCells = [];
  const cellProportion = canvasSize / 60;
  const gridLength = canvasSize / cellProportion;

  for (let i = 0; i < gridLength; i += 1) {
    randomCells[i] = [null];
    for (let j = 0; j < gridLength; j += 1) {
      randomCells[i][j] = Math.floor(Math.random() * 1.2);
    }
  }

  for (let columns = 0; columns < gridLength; columns += 1) {
    for (let rows = 0; rows < gridLength; rows += 1) {
      const cell = randomCells[columns][rows];

      ctx.beginPath();
      ctx.rect(
        columns * cellProportion,
        rows * cellProportion,
        cellProportion,
        cellProportion
      );
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
    }
  }
};
export default canvasGrid;
