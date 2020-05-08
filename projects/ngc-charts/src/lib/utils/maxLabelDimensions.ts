
export const getMaxLabelDimensions = (data: string[], angle: number, font = '16px Arial') => {
  const canv = document.createElement('canvas');
  const ctx = canv.getContext('2d');
  const element = document.createElement('span');
  ctx.font = font;
  const longestTxt = data.reduce((acc, curr) => {
    return ctx.measureText(acc).width > ctx.measureText(curr).width
      ? acc
      : curr;
  });
  element.innerText = longestTxt;
  element.style.display = 'inline-block';
  element.style.font = font;
  element.style.transform = `rotate(${angle}deg)`;
  document.body.appendChild(element);
  const clientRect = element.getBoundingClientRect();
  document.body.removeChild(element);

  const height = Math.ceil(clientRect.height);
  const width = Math.ceil(clientRect.width);

  return {width, height};
};
