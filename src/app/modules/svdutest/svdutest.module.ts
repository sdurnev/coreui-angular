import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {jqxDataTableModule} from "jqwidgets-ng/jqxdatatable";
import {jqxGridModule} from "jqwidgets-ng/jqxgrid";



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
    jqxGridModule
  ]
})
export class SvdutestModule { }
