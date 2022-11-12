import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BatteryElementComponent} from './battery-element/battery-element.component';

import {jqxHeatMapModule} from "jqwidgets-ng/jqxheatmap";
import {jqxRadioButtonModule} from "jqwidgets-ng/jqxradiobutton";


@NgModule({
  declarations: [
    BatteryElementComponent
  ],
  exports: [
    BatteryElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    jqxHeatMapModule,
    jqxRadioButtonModule
  ]
})
export class BatteryModule {
}
