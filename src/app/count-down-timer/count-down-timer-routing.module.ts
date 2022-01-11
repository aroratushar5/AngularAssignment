import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerComponent } from './count-down-timer.component';

const routes: Routes = [
  { path: '', component: CountDownTimerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownTimerRoutingModule { }
