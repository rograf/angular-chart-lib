export const maxWidthText = (data: string[], font = '16px Arial') =>{
  const canv = document.createElement('canvas');
  const ctx = canv.getContext('2d');
  ctx.font = font;
  let maxWidth = 0;
  for (const item of data) {
    const width = ctx.measureText(item).width;
    if (width > maxWidth) {
      maxWidth = Math.ceil(width);
    }
  }
  return maxWidth;
}