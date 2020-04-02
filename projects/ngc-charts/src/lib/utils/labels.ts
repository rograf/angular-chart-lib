export const getLabels = (data) =>{
  const labels = [];
  for(let i = 1, l = data.length; i < l; i++){
    labels.push(data[i][0])
  }
  return labels
}