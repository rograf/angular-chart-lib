import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { maxWidthText } from '../../utils/maxWidh';
import { getLabels } from '../../utils/labels';
import { getValues } from '../../utils/values';
import { getRotateAngle } from '../../utils/rotateAngle';
import { getMaxLabelDimensions } from '../../utils/maxLabelDimensions';

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

  a = 10
  b = 10

  padding = {
    small: 5,
    normal: 10,
    big: 20,
  }

  chart = {
    height: 0,
    width: 0
  }

  labels = {
    x: {
      data: [],
      metadata: {
        maxWidth: 0,
        maxHeight: 21,
        rotate: 0
      }
    },
    y: {
      data: [0,2,4,6,8],
      metadata: {
        maxWidth: 30,
        maxHeight: 21,
        rotate: 0,
        maxValue: 7
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
    y: 42.375 //400 - (21 + 10 + 10) - 20 = 339 / 8
  }

  style = {
    fill: {
      horizontalLine: "rgb(204, 204, 204)"
    },
    translate: {
      startBottom: null
    }
  }


  ngOnInit() {

    this.render();
  }

  render(){

    
    // console.log(this.data)
    
    this.chart.height = this.svgElement.nativeElement.clientHeight;
    this.chart.width = this.svgElement.nativeElement.clientWidth;
    
    this.style.translate.startBottom = `translate3d(0, ${this.chart.height}px, 0)`
    
    // this.labels.y.data = getValues(this.data)
    // this.labels.y.metadata.maxWidth = maxWidthText(this.labels.y.data)
    // this.labels.x.data = getLabels(this.data)

    // this.columns.number = this.labels.x.data.length;
    // this.columns.width = (this.chart.width - this.labels.y.metadata.maxWidth) / this.columns.number;

    // this.labels.x.metadata.rotate = getRotateAngle(this.columns.width, this.labels.x.metadata.maxWidth);
    // const labelDimenssions = getMaxLabelDimensions(this.labels.x.data, this.labels.x.metadata.rotate);
    // this.labels.x.metadata.maxHeight = labelDimenssions.height;
    // this.labels.x.metadata.maxWidth = labelDimenssions.width;

    // this.ratio.y = (this.chart.height - this.labels.x.metadata.maxHeight) / this.labels.x.data[this.labels.x.data.length - 1]

    // console.log('columns', this.columns)
    // console.log('labels', this.labels)
  }



}
