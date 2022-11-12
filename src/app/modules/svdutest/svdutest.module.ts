import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {jqxDataTableModule} from "jqwidgets-ng/jqxdatatable";
import {jqxGridModule} from "jqwidgets-ng/jqxgrid";
import { jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { jqxLinearGaugeModule } from 'jqwidgets-ng/jqxlineargauge';
import {CardModule} from "@coreui/angular";



@NgModule({
    declarations: [
        TestComponent
    ],
    exports: [
        TestComponent
    ],
  imports: [
    CommonModule,
    jqxDataTableModule,
    jqxGridModule,
    jqxGaugeModule,
    jqxLinearGaugeModule,
    CardModule
  ]
})
export class SvdutestModule { }
