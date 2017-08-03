import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldIndexComponent } from './world-index.component';

const routes: Routes = [
    { path: '', component: WorldIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldIndexRoutingModule { }
