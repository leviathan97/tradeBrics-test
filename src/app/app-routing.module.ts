import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessInfoComponent } from "./business-info/business-info.component";
import { GoodbyeComponent } from './goodbye/goodbye.component';


const routes: Routes = [
  {path: '', component: BusinessInfoComponent},
  {path: 'goodbye', component: GoodbyeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
