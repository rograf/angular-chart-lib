export const maxWidthText = (data:string[], font="16px Arial") =>{
  let canv = document.createElement('canvas');
  let ctx = canv.getContext("2d");
  ctx.font = font;
  let maxWidth = 0;
  for(let item of data){
    let width = ctx.measureText(item).width;
    if(width > maxWidth){
      maxWidth = width
    }
  }
  return maxWidth
}