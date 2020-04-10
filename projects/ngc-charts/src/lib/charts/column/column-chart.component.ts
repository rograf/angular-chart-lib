import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { maxWidthText } from '../../utils/maxWidh';
import { getLabels } from '../../utils/labels';
import { getValues } from '../../utils/values';
import { getRotateAngle } from '../../utils/rotateAngle';
import { maxHeightText } from '../../utils/maxHeight';

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

  values = [

  ]

  columns = {
    number: 0,
    width: 0
  }

  ratio = {
    y: 0
  }


  ngOnInit() {

    this.render()
  }

  render(){
    console.log(this.data)

    this.chart.height = this.svgElement.nativeElement.clientHeight;
    this.chart.width = this.svgElement.nativeElement.clientWidth;

    this.labels.y.data = getValues(this.data)
    this.labels.y.metadata.maxWidth = maxWidthText(this.labels.y.data)
    this.labels.x.data = getLabels(this.data)
    this.labels.x.metadata.maxWidth = maxWidthText(this.labels.x.data)

    this.columns.number = this.labels.x.data.length;
    this.columns.width = (this.chart.width - this.labels.y.metadata.maxWidth) / this.columns.number;

    this.labels.x.metadata.rotate = getRotateAngle(this.columns.width, this.labels.x.metadata.maxWidth)
    this.labels.x.metadata.maxHeight = maxHeightText(this.labels.x.data, this.labels.x.metadata.rotate)

    this.ratio.y = (this.chart.height - this.labels.x.metadata.maxHeight) / this.labels.x.data[this.labels.x.data.length - 1]

    console.log('columns', this.columns)
    console.log('labels', this.labels)
  }



}
