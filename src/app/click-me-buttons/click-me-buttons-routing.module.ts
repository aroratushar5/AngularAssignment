import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickMeButtonsComponent } from './click-me-buttons.component';

const routes: Routes = [
  {path:'', component: ClickMeButtonsComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickMeButtonsRoutingModule { }
