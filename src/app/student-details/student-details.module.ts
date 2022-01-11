import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentDetailsComponent } from './student-details.component';
import { MatTableModule } from '@angular/material/table'  
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    MatTableModule,
    MatSortModule
  ]
})
export class StudentDetailsModule { }
