import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        FormsModule
    ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
