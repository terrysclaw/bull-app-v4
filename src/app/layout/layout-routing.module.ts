import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'watchlist', loadChildren: './watchlist/watchlist.module#WatchlistModule' },
            { path: 'world-index', loadChildren: './world-index/world-index.module#WorldIndexModule' },
            { path: 'hsi-constituent', loadChildren: './hsi-constituent/hsi-constituent.module#HsiConstituentModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
