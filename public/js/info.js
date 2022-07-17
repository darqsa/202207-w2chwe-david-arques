const info = {
  canvasInfo: {
    canvasSize: 600,
    cellProportion() {
      return info.canvasInfo.canvasSize / 60;
    },
    gridLength() {
      return info.canvasInfo.canvasSize / info.canvasInfo.cellProportion();
    },
  },
};

export default info;
