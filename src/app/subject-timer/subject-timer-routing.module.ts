import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectTimerComponent } from './subject-timer.component';

const routes: Routes = [
  { path: '', component: SubjectTimerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectTimerRoutingModule { }
