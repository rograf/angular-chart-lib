export const getRotateAngle = (columnWidthPx: number, labelWidthPx: number): number => {
  return labelWidthPx > columnWidthPx ? -45 : 0;
};
