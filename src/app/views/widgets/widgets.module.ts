import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  CardModule,
  DropdownModule,
  GridModule,
  ProgressModule,
  SharedModule,
  WidgetModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsBrandComponent } from './widgets-brand/widgets-brand.component';
import { ChartSample, WidgetsDropdownComponent } from './widgets-dropdown/widgets-dropdown.component';
import { WidgetsEComponent } from './widgets-e/widgets-e.component';
import { WidgetsUpsComponent } from './widgets-ups/widgets-ups.component';
import { WidgetsUpsstatusComponent } from './widgets-upsstatus/widgets-upsstatus.component';
import { WidgetsRgaugesComponent } from './widgets-rgauges/widgets-rgauges.component';

import { FormsModule } from "@angular/forms";
import { KnobModule } from "primeng/knob";
import {YamapModule} from "../../modules/yamap/yamap.module";

@NgModule({
  declarations: [
    WidgetsComponent,
    WidgetsBrandComponent,
    WidgetsDropdownComponent,
    ChartSample,
    WidgetsEComponent,
    WidgetsUpsComponent,
    WidgetsUpsstatusComponent,
    WidgetsRgaugesComponent
  ],
    imports: [
        CommonModule,
        WidgetsRoutingModule,
        GridModule,
        WidgetModule,
        IconModule,
        DropdownModule,
        SharedModule,
        ButtonModule,
        CardModule,
        DocsComponentsModule,
        ProgressModule,
        ChartjsModule,
        KnobModule,
        FormsModule,
        YamapModule
    ],
  exports: [
    WidgetsBrandComponent,
    WidgetsDropdownComponent,
    WidgetsUpsComponent,
    WidgetsUpsstatusComponent,
    WidgetsRgaugesComponent
  ]
})
export class WidgetsModule {
}
