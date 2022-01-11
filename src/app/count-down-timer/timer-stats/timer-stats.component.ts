import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timer-stats',
  templateUrl: './timer-stats.component.html',
  styleUrls: ['./timer-stats.component.scss']
})
export class TimerStatsComponent implements OnChanges {

  public numberOfPauses: number = 0;
  public numberOfStarts: number = 0;
  @Input() startOrPauseClickEvent: boolean = false;
  @Input() resetClickEvent: boolean = false;
  public logsArray: Array<{ 'event': string, 'dateTime': any }> = [];
  public resetClicked: boolean = false;

  constructor() { }

  ngOnChanges(changes: any) {
    if (changes['resetClickEvent']) {
      if (this.logsArray.length) {
        this.resetClicked = true;
      }
      this.logsArray.length = 0;
      this.calculateNumberOfStartsAndPauses();
    }
    if (changes['startOrPauseClickEvent']) {
      this.logsArray.push({ 'event': changes['startOrPauseClickEvent']['currentValue'] === true ? 'Started at ' : 'Paused at ', 'dateTime': new Date() })
      this.calculateNumberOfStartsAndPauses();
    }
  }

  calculateNumberOfStartsAndPauses() {
    this.numberOfStarts = this.logsArray.filter(item => item.event === 'Started at ').length;
    if (this.resetClicked)
      this.numberOfPauses = this.logsArray.filter(item => item.event === 'Paused at ').length;
    else
      this.numberOfPauses = this.logsArray.filter(item => item.event === 'Paused at ').length ? this.logsArray.filter(item => item.event === 'Paused at ').length - 1 : 0;
  }
}
