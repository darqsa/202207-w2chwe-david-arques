const gridGenerator = (gridWidth) => {
  const grid = [];

  for (let i = 0; i < gridWidth; i += 1) {
    grid[i] = [null];
    for (let j = 0; j < gridWidth; j += 1) {
      grid[i][j] = 0;
    }
  }
  grid[2][2] = 1;
  console.log(grid);
};

export default gridGenerator;
