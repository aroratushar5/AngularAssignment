import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerLogs } from '../models';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.scss']
})
export class TimerLogsComponent implements OnInit {

  dateTime: Date = new Date();
  timerLogs$: Observable<TimerLogs[]> | undefined;

  constructor(
    private subjectTimerService: SubjectTimerService
  ) { }

  ngOnInit(): void {
    this.timerLogs$ = this.subjectTimerService.getTimerLogs();
  }
}
