import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngc-chart-column',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

  constructor() { }

  @Input() data;
  @Input() options;

  ngOnInit() {
  }

}
