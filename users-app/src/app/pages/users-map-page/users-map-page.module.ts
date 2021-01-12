import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMapPageComponent } from './users-map-page.component';
import {HeaderModule} from '../../components/header/header.module';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';



@NgModule({
  declarations: [UsersMapPageComponent],
    imports: [
      CommonModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDQEwmlCfO7imH5GspEMBaEKNZbv-h4Vrk'
      }),
      RouterModule.forChild([
        {
          path: '',
          component: UsersMapPageComponent
        }
      ]),
      HeaderModule,
    ],
  exports: [UsersMapPageComponent]
})
export class UsersMapPageModule { }
