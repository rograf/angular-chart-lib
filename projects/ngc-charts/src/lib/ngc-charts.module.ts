import { NgModule } from '@angular/core';
import { ColumnChartComponent } from './charts/column/column-chart.component';
import { LegendComponent } from './legend/legend.component';
import { CommonModule } from '@angular/common';

const CHARTS = [
  ColumnChartComponent
]

@NgModule({
  declarations: [...CHARTS, LegendComponent],
  imports: [
    CommonModule
  ],
  exports: [...CHARTS]
})
export class NgcChartsModule { }
