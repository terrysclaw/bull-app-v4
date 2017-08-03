import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HsiConstituentComponent } from './hsi-constituent.component';

const routes: Routes = [
    { path: '', component: HsiConstituentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HsiConstituentRoutingModule { }
