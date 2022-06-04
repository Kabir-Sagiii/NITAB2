import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincComponent } from './components/admin/adminc/adminc.component';
import { ActioncComponent } from './components/admin/actionc/actionc.component';



@NgModule({
  declarations: [
    AdmincComponent,
    ActioncComponent
  ],
  imports: [
    CommonModule
  ],
  
 
})
export class AdminModule { }
