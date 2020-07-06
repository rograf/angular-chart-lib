import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { maxWidthText } from '../../utils/maxWidh';
import { getLabels } from '../../utils/labels';
import { getValues } from '../../utils/values';
import { getRotateAngle } from '../../utils/rotateAngle';
import { getMaxLabelDimensions } from '../../utils/maxLabelDimensions';
import { getBarColumns } from '../../utils/bar-columns/bar-columns';

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

  padding = {
    small: 5,
    normal: 10,
    big: 20,
  }

  chart = {
    height: 0,
    width: 0,
    level: {
      x: 0,
      y: 0
    }
  }

  labels = {
    x: {
      data: ["01.01", "02.01", "03.01", "04.01", "05.01"],
      metadata: {
        maxWidth: 0,
        maxHeight: 21,
        rotate: 0
      }
    },
    y: {
      data: [0,2,4,6,8],
      metadata: {
        maxWidth: 20,
        maxHeight: 21,
        rotate: 0,
        maxValue: 7
      }
    },
  }

  series = [
    [2,0],
    [7,0],
    [1,6],
    [0,0],
    [0,2],
  ]

  columns = {
    number: 0,
    width: 0,
    barWidth: 0,
    paddingInside: 0,
    paddingOutside: 0
  }

  ratio = {
    y: 0
  }

  style = {
    fill: {
      horizontalLine: "rgb(204, 204, 204)",
    },
    translate: {
      startBottom: null
    }
  }

  colors = ["rgba(73, 153, 19, 0.8)", "rgb(255, 0, 0, 0.8)"]


  ngOnInit() {
    this.render();
  }

  render(){


    // console.log(this.data)

    this.chart.height = this.svgElement.nativeElement.clientHeight;
    this.chart.width = this.svgElement.nativeElement.clientWidth;

    this.style.translate.startBottom = `translate3d(0, ${this.chart.height}px, 0)`

    this.ratio.y = (this.chart.height - (this.labels.x.metadata.maxHeight + 4 * this.padding.normal)) / this.labels.y.data[this.labels.y.data.length - 1]

    this.chart.level.x = this.labels.y.metadata.maxWidth + this.padding.normal
    this.chart.level.y = this.labels.x.metadata.maxHeight + 2 * this.padding.normal;

    this.columns = getBarColumns(this.series, this.chart, {paddingInside: 2, paddingOutside: 4})

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
