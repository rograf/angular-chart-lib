import { PaddingOptions, Columns, defaultOptions } from './bar-columns.model';

export const getBarColumns = (series: number[][], chart, options: PaddingOptions = {}): Columns => {

  const chartOptions = {...defaultOptions, ...options};

  const numberOfColumns = series.length;
  const numberOfBars = series[0].length;
  const paddingInsideColumn = numberOfBars === 1 ? 0 : chartOptions.paddingInside;
  const paddingsSize = 2 * chartOptions.paddingOutside + paddingInsideColumn * (numberOfBars - 1);
  const columnWidth = (chart.width - chart.level.x) / numberOfColumns;
  const barWidth = (columnWidth - paddingsSize)/numberOfBars;

  return {
    number: numberOfColumns,
    width: columnWidth,
    barWidth: barWidth,
    paddingInside: paddingInsideColumn,
    paddingOutside: chartOptions.paddingOutside
  }
}
