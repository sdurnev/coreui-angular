import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { EpuRoutingModule } from './epu-routing.module';
import { EpuComponent } from './epu.component';

import { WidgetsModule } from '../widgets/widgets.module';
import {YamapModule} from "../../modules/yamap/yamap.module";

@NgModule({
    imports: [
        EpuRoutingModule,
        CardModule,
        NavModule,
        IconModule,
        TabsModule,
        CommonModule,
        GridModule,
        ProgressModule,
        ReactiveFormsModule,
        ButtonModule,
        FormModule,
        ButtonModule,
        ButtonGroupModule,
        ChartjsModule,
        AvatarModule,
        TableModule,
        WidgetsModule,
        YamapModule
    ],
  declarations: [EpuComponent]
})
export class EpuModule {
}
