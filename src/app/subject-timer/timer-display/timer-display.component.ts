import { Component, OnInit } from '@angular/core';
import { CountDownTimer } from '../models';
import { SubjectTimerService } from '../subject-timer.service';
@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {
  remainingSeconds: number = 0;
  timer: any;
  timerRunning: boolean = false;

  constructor(private subjectTimerService: SubjectTimerService) { }

  ngOnInit(): void {
    this.remainingSeconds = 10;
    this.subjectTimerService.countDownTimer$.subscribe(value => {
      //take the latest user event
      const data = value[value.length - 1];
      if (data.isResetClick) {
        this.onResetClick(data.timerLimit)
      }
      else if (data.timerLimit)
        this.onInputData(data)
    })
    this.subjectTimerService.timerLimit$.subscribe(data => {
      this.remainingSeconds = data;
    })
  }

  onInputData(data: CountDownTimer) {
    if (this.timerRunning) this.pauseTimer()
    else this.startTimer()
  }

  startTimer() {
    this.timerRunning = true;
    this.timer = setInterval(() => {
      this.remainingSeconds = this.remainingSeconds > 0 ? this.remainingSeconds - 1 : this.remainingSeconds;
      if (this.remainingSeconds < 1) clearInterval(this.timer);
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.timerRunning = false;
  }
  onResetClick(timerLimit: number) {
    this.pauseTimer();
    this.remainingSeconds = timerLimit;
  }
}
