export interface Columns {
  number: number;
  width: number;
  barWidth: number;
  paddingInside: number;
  paddingOutside: number;
}

export interface PaddingOptions {
  paddingInside?: number;
  paddingOutside?: number;
}

export const defaultOptions = {
  paddingInside: 4,
  paddingOutside: 8
}
