import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwsPage } from './aws.page';

const routes: Routes = [
  {
    path: '',
    component: AwsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwsPageRoutingModule {}
