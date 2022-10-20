import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAlarmComponent } from './table-alarm/table-alarm.component';
import { TableWarningsComponent } from './table-warnings/table-warnings.component';
import { TableEventComponent } from './table-event/table-event.component';
import { TableMaintenanceComponent } from './table-maintenance/table-maintenance.component';



@NgModule({
  declarations: [
    TableAlarmComponent,
    TableWarningsComponent,
    TableEventComponent,
    TableMaintenanceComponent
  ],
  exports: [
    TableAlarmComponent,
    TableWarningsComponent,
    TableEventComponent,
    TableMaintenanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TablesModule { }
