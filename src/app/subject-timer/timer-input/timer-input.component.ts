import { Component } from '@angular/core';
import { SubjectTimerService } from '../subject-timer.service';
@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent {

  constructor(private subjectTimerService: SubjectTimerService) { }
  public model: { timerLimit: number; } = {
    'timerLimit': 0
  };
  public startOrPauseClickEvent: Boolean = false;

  onStartOrPause() {

    this.startOrPauseClickEvent = !this.startOrPauseClickEvent;
    this.subjectTimerService.onStartOrPauseButtonClick({ 'event': this.startOrPauseClickEvent ? 'Started At ' : 'Paused At ', 'dateTime': new Date(), 'timerLimit': this.model.timerLimit, 'isResetClick': false })
  }

  ontimerLimitChange() {
    this.subjectTimerService.onTimerLimitChange(this.model.timerLimit)
  }

  onReset() {
    this.startOrPauseClickEvent = false;
    this.subjectTimerService.onStartOrPauseButtonClick({ 'event': this.startOrPauseClickEvent ? 'Started At ' : 'Paused At ', 'dateTime': new Date(), 'timerLimit': this.model.timerLimit, 'isResetClick': true })
  }
}