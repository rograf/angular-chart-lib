import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  columnChartData = [
    ['days', 'success', 'fail'],
    ['01.01', 5, 0],
    ['02.01', 7, 0],
    ['03.01', 1, 6],
    ['04.01', 0, 0],
    ['05.01', 0, 2],
  ]

  // ['unitName', 'seriesLabel_1', 'seriesLabel_2]
  // ['unitLabel_1', 'seriesValue_1', 'seriesValue_2]
  // ['unitLabel_2', 'seriesValue_1', 'seriesValue_2]

  columnChartOptions = {}

}
