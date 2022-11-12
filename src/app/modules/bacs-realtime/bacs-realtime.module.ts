import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyRealtimeComponent} from './body-realtime/body-realtime.component';
import {CardModule, NavModule, TabsModule} from "@coreui/angular";
import {RouterLinkWithHref} from "@angular/router";


@NgModule({
  declarations: [
    BodyRealtimeComponent,
  ],
  exports: [
    BodyRealtimeComponent,
  ],
  imports: [
    CommonModule,
    TabsModule,
    RouterLinkWithHref,
    NavModule,
    CardModule,

  ]
})
export class BacsRealtimeModule {
}
