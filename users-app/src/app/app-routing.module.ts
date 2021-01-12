import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {UserInfoPageComponent} from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/registration-page/registration-page.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./pages/users-list-page/users-list-page.module').then(m => m.UsersListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users-map',
    loadChildren: () => import('./pages/users-map-page/users-map-page.module').then(m => m.UsersMapPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile-page/user-profile-page.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'user-info/:id',
    component: UserInfoPageComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
