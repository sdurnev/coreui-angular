import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { jqxGaugeComponent } from 'jqwidgets-ng/jqxgauge';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent implements OnInit, AfterViewInit {

  @ViewChild('myGauge', {static: false}) myGauge: jqxGaugeComponent | undefined;
  //@ViewChild('myLinearGauge', { static: false }) myLinearGauge: jqxLinearGaugeComponent | undefined;
  //@ViewChild('gaugeValue', { static: false }) gaugeValue: ElementRef | undefined;

  ngAfterViewInit(): void {
    // @ts-ignore
    this.myGauge.value(48);
    // @ts-ignore
    this.myLinearGauge.value(40);
  }
  ticksMinor: any = { interval: 5, size: '5%' };
  ticksMajor: any = { interval: 10, size: '9%' };
  border: any = { visible: 'false'};
  ranges: any[] =
    [
      { startValue: 0, endValue: 20, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 5 },
      { startValue: 20, endValue: 50, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 5, startWidth: 5 },
      { startValue: 50, endValue: 70, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 5, startWidth: 5 },
      { startValue: 70, endValue: 100, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 5, startWidth: 5 }
    ];
  ticksMinorLinear: any = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } };
  ticksMajorLinear: any = { size: '10%', interval: 10 };
  labels: any = {
    interval: 20,
    formatValue: (value: number, position: string): string => {
      if (position === 'far') {
        value = (9 / 5) * value + 32;
        if (value === -76) {
          return '°F';
        }
        return value + '°';
      }
      if (value === -60) {
        return '°C';
      }
      return value + '°';
    }
  };
  rangesLinear: any[] = [
    { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
    { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
    { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
  ];
  onValueChanging(event: any): void {
    // @ts-ignore
    this.gaugeValue.nativeElement.innerHTML = Math.round(event.args.value) + ' kph';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
