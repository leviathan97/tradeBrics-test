import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessInfoComponent } from "./business-info/business-info.component";
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: BusinessInfoComponent},
  {path: 'goodbye', component: GoodbyeComponent},
  {path: 'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
