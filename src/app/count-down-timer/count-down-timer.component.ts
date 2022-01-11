import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit {
  public startOrPauseClickEvent: boolean = false;
  public resetClickEvent: boolean = false;
  public timerLimit: any;
  constructor(public cd: ChangeDetectorRef) { }

  ngOnInit() { }
  onStartOrPauseClick(event: any) {
    this.startOrPauseClickEvent = event;
    // this.cd.detectChanges();
  }
  onResetClick(event: any) {
    this.resetClickEvent = event;
  }
  onTimerLimit(limit: any) {
    this.timerLimit = limit;
  }
}

