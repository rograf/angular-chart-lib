import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { maxWidthText } from '../../utils/maxWidh';
import { getLabels } from '../../utils/labels';
import { getValues } from '../../utils/values';

@Component({
  selector: 'ngc-chart-column',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

  constructor() { }

  @Input() data;
  @Input() options;

  @ViewChild('svg', {static:true}) svgElement:ElementRef<SVGAElement>

  chart = {
    height: 0,
    width: 0
  }

  labels = {
    x: {
      data: [],
      metadata: {
        maxWidth: 0,
        maxHeight: 0,
        rotate: 0
      }
    },
    y: {
      data: [],
      metadata: {
        maxWidth: 0,
        maxHeight: 0,
        rotate: 0,
        maxValue: 0
      }
    },
  }

  columns = {
    number: 0,
    width: 0
  }

  grid = {
    ratioY: 0,
    ratioX: 0
  }


  ngOnInit() {

    this.render()
  }

  render(){
    this.chart.height = this.svgElement.nativeElement.clientHeight;
    this.chart.width = this.svgElement.nativeElement.clientWidth;
    // this.labels.y.data = getValues(this.data)
    this.labels.y.metadata.maxWidth = maxWidthText(this.labels.y.data)
    this.labels.x.data = getLabels(this.data)
    this.labels.x.metadata.maxWidth = maxWidthText(this.labels.x.data)
    console.log(this.labels)
  }



}
