import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountDownTimer, TimerStats } from '../models';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-timer-stats',
  templateUrl: './timer-stats.component.html',
  styleUrls: ['./timer-stats.component.scss']
})
export class TimerStatsComponent implements OnInit {
  public numberOfPauses: number = 0;
  public numberOfStarts: number = 0;
  timerStats$: Observable<CountDownTimer[]> | undefined;
  constructor(
    private subjectTimerService: SubjectTimerService
  ) { }

  ngOnInit(): void {
    this.timerStats$ = this.subjectTimerService.getTimerStats();
    this.timerStats$.subscribe(data => {
      this.numberOfStarts = data.filter(item => item.event === 'Started At ').length;
      this.numberOfPauses = data.filter(item => item.event === 'Paused At ').length;
    })
  }

}
