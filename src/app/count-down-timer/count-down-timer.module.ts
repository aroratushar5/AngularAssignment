import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownTimerRoutingModule } from './count-down-timer-routing.module';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerStatsComponent } from './timer-stats/timer-stats.component';
import { CountDownTimerComponent } from './count-down-timer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountDownTimerComponent,
    TimerDisplayComponent,
    TimerInputComponent,
    TimerLogsComponent,
    TimerStatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountDownTimerRoutingModule
  ]
})
export class CountDownTimerModule { }
