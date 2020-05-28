export const getBarColumns = (series, chart, options = {}) =>{
  return {
    number: series.length,
    width: 108,
    barWidth: 48,
    paddingInside: 2,
    paddingOutside: 4 
  }
}