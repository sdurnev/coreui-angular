import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BacsComponent } from './bacs.component';

const routes: Routes = [
  {
    path: '',
    component: BacsComponent,
    data: {
      title: $localize`bacs`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BacsRoutingModule {
}
