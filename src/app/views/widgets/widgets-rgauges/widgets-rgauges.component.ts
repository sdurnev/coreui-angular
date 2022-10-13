import {Component, OnInit} from '@angular/core';
import value from "*.json";

@Component({
  selector: 'app-widgets-rgauges',
  templateUrl: './widgets-rgauges.component.html',
  styleUrls: ['./widgets-rgauges.component.scss']
})
export class WidgetsRgaugesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  value1: number = 0;
  value2: number = 50;
  value3: number = 75;
  value4: number = 10;
  value5: number = 40;
  value6: number = 60;
  value7: number = 40;
  value8: number = 60;
  value9: number = 50;

  valueColor = "blue";
  CheckValue(){
    if (this.value7 <= 40){
      this.valueColor = "red";
    } else {
      this.valueColor = "blue";
    }
  }
}
