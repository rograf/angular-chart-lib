export const getRotateAngle = (columnWidthPx: number, labelWidthPx: number): number => {
  if (labelWidthPx > columnWidthPx) {
    const acos = Math.acos(columnWidthPx / labelWidthPx);
    const roundedResult = Math.round(acos * 180 / Math.PI);
    return -Math.abs(roundedResult);
  } else {
    return 0;
  }
};
