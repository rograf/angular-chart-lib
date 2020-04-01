import {
  Component,
  Input,
  ViewChild,
  Renderer2,
  AfterViewInit,
  ElementRef,
  HostListener
} from "@angular/core";

@Component({
  selector: "ngc-chart-column",
  templateUrl: "./column-chart.component.html",
  styleUrls: ["./column-chart.component.scss"]
})
export class ColumnChartComponent implements AfterViewInit {
  @ViewChild("chartContainer", { static: true }) chartContainer: ElementRef;
  @Input() data;
  @Input() options;
  constructor(private renderer: Renderer2) {}
  svgContainer;
  containerWidth: number;
  containerHeight: number;
  config = {
    labelsX: ["01.01", "02.01", "03.01", "04.01", "05.01"],
    labelsY: [],
    stepsX: [],
    stepsY: [],
    values: [50, 100, 25, 10, 75],
    maxLabelWidthX: "",
    maxLabelWidthY: 15,
    maxLabelHeightX: "",
    heightAxisX: 10
  };

  @HostListener("window:resize") handleWindowResize() {
    // Performance issues ?? might cause them
    this.containerWidth = this.chartContainer.nativeElement.offsetWidth;
    this.containerHeight = this.chartContainer.nativeElement.offsetHeight;
    this.renderer.removeChild(
      this.chartContainer.nativeElement,
      this.svgContainer
    );
    this.render();
  }

  prepareChartData() {
    // Set up config?
  }

  ngAfterViewInit() {
    this.containerWidth = this.chartContainer.nativeElement.offsetWidth;
    this.containerHeight = this.chartContainer.nativeElement.offsetHeight;
    this.render();
  }

  render() {
    this.svgContainer = this.createSvgContainer(
      this.containerHeight,
      this.containerWidth
    );
    const axisX = this.createAxisX();
    const axisY = this.createAxisY();
    const dataset = this.createDataset();

    this.renderer.appendChild(
      this.chartContainer.nativeElement,
      this.svgContainer
    );
    this.renderer.appendChild(this.svgContainer, axisX);
    this.renderer.appendChild(this.svgContainer, axisY);
    this.renderer.appendChild(this.svgContainer, dataset);
  }

  createSvgElement(tag, attributes) {
    const element = this.renderer.createElement(
      tag,
      "http://www.w3.org/2000/svg"
    );
    for (const attr in attributes) {
      if (attr === "text-content") {
        element["textContent"] = attributes[attr];
      } else {
        this.renderer.setAttribute(element, attr, attributes[attr]);
      }
    }
    return element;
  }

  createSvgContainer(height, width) {
    const attributes = {
      height,
      width
    };

    const container = this.createSvgElement("svg", attributes);
    return container;
  }

  createSvgGroup(config = {}) {
    return this.createSvgElement("g", config);
  }

  createText(x, y, content, options) {
    options = {
      "text-content": content,
      "font-family": "Arial",
      "font-size": "15px",
      x,
      y,
      ...options
    };
    return this.createSvgElement("text", options);
  }
  createVerticalLine(x, y1, y2) {
    const attributes = {
      x1: x,
      x2: x,
      y1,
      y2,
      style: "stroke:#9e9e9e; stroke-width:1"
    };
    return this.createSvgElement("line", attributes);
  }

  createHorizontalLine(x1, x2, y) {
    const attributes = {
      x1,
      x2,
      y1: y,
      y2: y,
      style: "stroke:#9e9e9e; stroke-width:1"
    };
    return this.createSvgElement("line", attributes);
  }

  createDatasetBar(x, y, width, height) {
    const attributes = {
      x,
      y,
      width,
      height,
      style: "fill: #009688;"
    };
    return this.createSvgElement("rect", attributes);
  }

  createAxisX() {
    // Should create and return whole axisX
    const steps = this.calculateStepsX();
    const group = this.createSvgGroup({
      transform: `translate(${steps[1] / 2}, 0)`
    });
    this.config.stepsX = steps;
    const bottomTextPoint = this.containerHeight;
    const topTextPoint = this.containerHeight - 15;
    const topLinePoint = this.containerHeight - 15 - this.config.heightAxisX;

    this.config.labelsX.forEach((label, index) => {
      const line = this.createVerticalLine(
        steps[index] + this.calculateBarWidth() / 2,
        topTextPoint,
        topLinePoint
      );
      const text = this.createText(steps[index], bottomTextPoint, label, {});
      this.renderer.appendChild(group, line);
      this.renderer.appendChild(group, text);
    });
    return group;
  }
  createAxisY() {
    // Should create and return whole Y axis
    const linePoint = this.containerHeight - 15 - this.config.heightAxisX;
    const group = this.createSvgGroup({
      transform: `translate(${this.config.stepsX[1] / 2}, 0)`
    });
    const steps = this.calculateStepsY();

    this.config.stepsY = steps;
    steps.forEach((step, index) => {
      const line = this.createHorizontalLine(
        0,
        this.containerWidth,
        linePoint - step
      );
      const text = this.createText(
        -this.config.maxLabelWidthY,
        linePoint - step,
        this.config.labelsY[index],
        { "text-anchor": "end" }
      );
      this.renderer.appendChild(group, line);
      this.renderer.appendChild(group, text);
    });
    return group;
  }

  createDataset() {
    const bottomBarPoint = this.containerHeight - 15 - this.config.heightAxisX;
    const barWidth = this.calculateBarWidth();

    const group = this.createSvgGroup({
      transform: `translate(${this.config.stepsX[1] / 2}, 0)`
    });
    this.config.values.forEach((value, index) => {
      const bar = this.createDatasetBar(
        this.config.stepsX[index],
        bottomBarPoint - value,
        barWidth,
        value
      );
      this.renderer.appendChild(group, bar);
    });
    return group;
  }
  calculateBarWidth() {
    // Should calculate width of each bar depending on cointainer this.containerWidth
    return 10;
  }
  calculateStepsY() {
    // Should calculate step of Yaxis based on dataSet values
    const steps = [0, 50, 100, 150, 200];
    this.config.labelsY = steps;
    return steps;
  }
  calculateStepsX() {
    const steps = [];
    const stepLength =
      (this.containerWidth - this.config.maxLabelWidthY) /
      this.config.labelsX.length;
    this.config.labelsX.forEach((label, index) => {
      steps.push(stepLength * index);
    });
    return steps;
  }
}
