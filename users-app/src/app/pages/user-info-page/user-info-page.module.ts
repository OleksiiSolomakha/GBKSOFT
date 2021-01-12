import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoPageComponent } from './user-info-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [UserInfoPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserInfoPageComponent
      }
    ]),
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class UserInfoPageModule { }
