import { NgModule } from '@angular/core';
import { ColumnChartComponent } from './charts/column/column-chart.component';
import { LegendComponent } from './legend/legend.component';

const CHARTS = [
  ColumnChartComponent
]

@NgModule({
  declarations: [...CHARTS, LegendComponent],
  imports: [
  ],
  exports: [...CHARTS]
})
export class NgcChartsModule { }
