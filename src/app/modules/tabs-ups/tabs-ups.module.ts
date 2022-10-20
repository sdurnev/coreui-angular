import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import {NavModule, TabsModule} from "@coreui/angular";
import {RouterLinkWithHref} from "@angular/router";
import {TablesModule} from "../tables/tables.module";
import {SvdutestModule} from "../svdutest/svdutest.module";



@NgModule({
    declarations: [
        TabsComponent
    ],
    exports: [
        TabsComponent
    ],
    imports: [
        CommonModule,
        NavModule,
        RouterLinkWithHref,
        TablesModule,
        TabsModule,
        SvdutestModule
    ]
})
export class TabsUpsModule { }
