import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.scss']
})
export class TimerLogsComponent implements OnInit {

  @Input() startOrPauseClickEvent: boolean = false;
  @Input() resetClickEvent: boolean = false;
  public logsArray: Array<{ 'event': string, 'dateTime': any }> = [];
  public resetClicked: boolean = false;
  constructor() { }

  public dateTime = new Date()
  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes['resetClickEvent']) {
      if (this.logsArray.length) {
        this.resetClicked = true;
      }
      this.logsArray.length = 0
    }
    if (changes['startOrPauseClickEvent']) {
      this.logsArray.push({ 'event': changes['startOrPauseClickEvent']['currentValue'] === true ? 'Started at ' : 'Paused at ', 'dateTime': new Date() })
    }
  }

}