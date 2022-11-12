import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {jqxHeatMapComponent} from 'jqwidgets-ng/jqxheatmap';


@Component({
  selector: 'app-battery-element',
  templateUrl: './battery-element.component.html',
  styleUrls: ['./battery-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatteryElementComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  @ViewChild('myHeatMap', {static: false}) myHeatMap: jqxHeatMapComponent | undefined;

  xAxis: object = {
    labels: ['Эл1', 'Эл2', 'Эл3', 'Эл4', 'Эл5', 'Эл6', 'Эл7']
  };
  yAxis: object = {
    labels: ['Eq', 'R', 'Т', 'U']
  };
  data: number[][] = [
      [1.5, 1.0, 20.3, 80.3],
      [1.5, 2.5, 24.3, 12.1],
      [1.5, 1.3, 22.3, 12.9],
      [1.5, 1.6, 22.8, 12.8],
      [1.5, 1.8, 22.6, 12.5],
      [1.5, 2.1, 23.3, 12.3],
      [1.5, 0.5, 24.3, 12.3],
    ];

  legendSettings: object = {
    position: 'Bottom'
  };
  paletteSettings: object = {
    palette: [
      {value: 10, color: '#6bbd49'},
      {value: 20, color: '#22aaaa'},
      {value: 30, color: '#53b9e6'},
    ]
  };


  setGradientType(event: any): void {
    if (this.myHeatMap) {
      this.myHeatMap.setPaletteType('Gradient');
    }
  }

  setFixedType(event: any): void {
    if (this.myHeatMap) {
      this.myHeatMap.setPaletteType('Fixed');
    }
  }
}
