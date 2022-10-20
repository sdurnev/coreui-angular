import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YamapComponent} from './widgets/yamap/yamap.component';
import {AngularYandexMapsModule, YaConfig} from 'angular8-yandex-maps';
import {environment} from '../../../environments/environment';
import {CardModule, GridModule, WidgetModule} from "@coreui/angular";


const mapConfig: YaConfig = {
  apikey: environment.apikey,
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    YamapComponent,
  ],
  exports: [
    YamapComponent,
  ],
    imports: [
        CommonModule,
        AngularYandexMapsModule.forRoot(mapConfig),
        WidgetModule,
        GridModule,
        CardModule
    ]
})
export class YamapModule {
}
