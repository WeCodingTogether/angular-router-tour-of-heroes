import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { authGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/superheroes'},
  { path: 'compose', component: ComposeMessageComponent, outlet:'popup'},
  { path: 'admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule), canMatch: [authGuard]},
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crises-center.module').then(m => m.CrisisCenterModule),
    data: { preload: true }
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        preloadingStrategy: SelectivePreloadingStrategyService
      }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
