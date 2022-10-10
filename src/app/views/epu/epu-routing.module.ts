import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EpuComponent } from './epu.component';

const routes: Routes = [
  {
    path: '',
    component: EpuComponent,
    data: {
      title: $localize`Epu`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpuRoutingModule {
}
