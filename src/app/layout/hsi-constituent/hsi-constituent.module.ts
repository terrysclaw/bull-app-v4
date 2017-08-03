import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsiConstituentRoutingModule } from './hsi-constituent-routing.module';
import { HsiConstituentComponent } from './hsi-constituent.component';

@NgModule({
    imports: [
        CommonModule,
        HsiConstituentRoutingModule,
    ],
    declarations: [
        HsiConstituentComponent,
    ]
})
export class HsiConstituentModule { }
