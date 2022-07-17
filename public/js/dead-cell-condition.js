const deadCell = (appendedCells) => {
  if (appendedCells < 2) {
    return 0;
  }
  if (appendedCells > 3) {
    return 0;
  }
  return 1;
};
export default deadCell;
