import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldIndexRoutingModule } from './world-index-routing.module';
import { WorldIndexComponent } from './world-index.component';

@NgModule({
    imports: [
        CommonModule,
        WorldIndexRoutingModule,
    ],
    declarations: [
        WorldIndexComponent,
    ]
})
export class WorldIndexModule { }
