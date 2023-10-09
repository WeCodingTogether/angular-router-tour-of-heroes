import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const authRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: LoginComponent},
  { path: '**', component: LoginComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(authRoutes), // When true, log all internal navigation events to the console. Use for debugging.
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
