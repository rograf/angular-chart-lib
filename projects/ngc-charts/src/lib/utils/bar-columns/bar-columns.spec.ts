import { getBarColumns } from './bar-columns';
import { defaultOptions } from './bar-columns.model';

fdescribe('[FUNCTION] getBarColumns', () => {
  describe('', () => {
    const chart = {
      height: 400,
      width: 600,
      level: {
        x: 30,
        y: 40,
      }
    }

    const options = {
      paddingInside: 3,
      paddingOutside: 8
    }

    it('should return default paddings, when no options are passed', ()=> {
      const series = [[2,0], [0,0], [4,2]];
      const columns = getBarColumns(series, chart);
      expect(columns.paddingInside).toEqual(defaultOptions.paddingInside);
      expect(columns.paddingOutside).toEqual(defaultOptions.paddingOutside);
    });

    it('should return column width greater than bar width', () => {
      const series = [[2,0], [4,2]];
      const columns = getBarColumns(series, chart, options);
      expect(columns.width).toBeGreaterThan(columns.barWidth);
    });

    it ('should return paddingInside equal to 0, when the columns contain one bar', () => {
      const series = [[1],[6]];
      const columns = getBarColumns(series, chart, options);
      expect(columns.paddingInside).toEqual(0);
    });

  })

  describe('example', () => {
    const series = [[2],[3]];
    const options = {
      paddingOutside: 5
    }
    const chart = {
      height: 50,
      width: 300,
      level: {
        x: 20,
        y: 20
      }
    }

    it('if arguments are [[2],[3]], {height: 50, width: 300, level: {x:20, y:20}}, {paddingOutside: 5} it should return {number: 2, width: 140 , barWidth: 130 , paddingInside: 0,  paddingOutside: 5}', ()=> {
      expect(getBarColumns(series, chart, options)).toEqual({
        number: 2,
        width: 140 ,
        barWidth: 130 ,
        paddingInside: 0,
        paddingOutside: options.paddingOutside
      });
    })
  })
})

