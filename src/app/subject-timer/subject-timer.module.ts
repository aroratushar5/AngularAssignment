import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectTimerRoutingModule } from './subject-timer-routing.module';
import { SubjectTimerComponent } from './subject-timer.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerStatsComponent } from './timer-stats/timer-stats.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubjectTimerComponent,
    TimerDisplayComponent,
    TimerInputComponent,
    TimerLogsComponent,
    TimerStatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubjectTimerRoutingModule
  ]
})
export class SubjectTimerModule { }
