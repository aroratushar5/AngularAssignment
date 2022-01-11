import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'click-me-buttons', loadChildren: () => import('./click-me-buttons/click-me-buttons.module').then(m => m.ClickMeButtonsModule) },
  { path: 'count-down-timer', loadChildren: () => import('./count-down-timer/count-down-timer.module').then(m => m.CountDownTimerModule) },
  { path: 'subject-timer', loadChildren: () => import('./subject-timer/subject-timer.module').then(m => m.SubjectTimerModule) },
  { path: 'floating-banner', loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule) },
  { path: 'category-page', loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule) },
  { path: 'student-details', loadChildren: () => import('./student-details/student-details.module').then(m => m.StudentDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
