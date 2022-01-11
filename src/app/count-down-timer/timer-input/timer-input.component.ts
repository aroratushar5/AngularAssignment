import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent {

  constructor() { }
  public model: { timerLimit: number; } = {
    'timerLimit': 0
  };
  public startOrPauseClickEvent: Boolean = false;
  public resetClickEvent: Boolean = false;
  @Output() onStartOrPauseClick = new EventEmitter<Boolean>()
  @Output() onResetClick = new EventEmitter<Boolean>()
  @Output() timerLimit = new EventEmitter<Number>()

  onStartOrPause() {
    this.timerLimit.emit(this.model.timerLimit)
    this.startOrPauseClickEvent = !this.startOrPauseClickEvent;
    this.onStartOrPauseClick.emit(this.startOrPauseClickEvent)
  }
  onReset() {
    //pause the timer on reset click
    this.startOrPauseClickEvent = false;
    this.onStartOrPauseClick.emit(this.startOrPauseClickEvent)
    this.timerLimit.emit(this.model.timerLimit)
    this.resetClickEvent = !this.resetClickEvent;
    this.onResetClick.emit(this.resetClickEvent)
  }
}