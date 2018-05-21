import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanActivateChild } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from './guards/auth.guard';
import { StorageService } from './services/storage.service';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule', canActivateChild: [AuthGuard]},
  // { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule', canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard, StorageService]
})
export class AppRoutingModule { }
