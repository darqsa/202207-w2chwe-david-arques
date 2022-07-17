const deadCell = (cell, appendedCells) => {
  if (cell === 0 && appendedCells === 3) {
    return 1;
  }
  if (cell === 1 && appendedCells < 2) {
    return 0;
  }
  if (cell === 1 && appendedCells > 3) {
    return 0;
  }
  if (cell === 1 && appendedCells === 2) {
    return 1;
  }
  if (cell === 1 && appendedCells === 3) {
    return 1;
  }
  return 0;
};
export default deadCell;
