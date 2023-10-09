import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router'
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/heroes'},
  { path: 'compose', component: ComposeMessageComponent, outlet:'popup'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // When true, log all internal navigation events to the console. Use for debugging.
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
