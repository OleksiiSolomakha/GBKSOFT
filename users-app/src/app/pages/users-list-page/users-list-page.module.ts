import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListPageComponent } from './users-list-page.component';
import {HeaderModule} from '../../components/header/header.module';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [UsersListPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersListPageComponent
      }
    ]),
    HeaderModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
  ],
  exports: [UsersListPageComponent]
})
export class UsersListPageModule { }
