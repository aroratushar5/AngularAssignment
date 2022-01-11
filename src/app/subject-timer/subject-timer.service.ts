import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, groupBy, map, mergeMap, reduce } from 'rxjs/operators';
import { CountDownTimer, TimerLogs, TimerStats } from './models';
@Injectable({
  providedIn: 'root'
})
export class SubjectTimerService {
  public countDownTimer$: BehaviorSubject<CountDownTimer[]>
  public timerLimit$: BehaviorSubject<number>
  public eventsArray: Array<CountDownTimer[]> = [];
  constructor() {
    this.countDownTimer$ = new BehaviorSubject<CountDownTimer[]>([{ 'event': null, 'dateTime': new Date(), 'timerLimit': 0, 'isResetClick': false }])
    this.timerLimit$ = new BehaviorSubject<number>(0)
  }

  onStartOrPauseButtonClick(event: any) {
    if (event.isResetClick) this.countDownTimer$.next([{ 'event': null, 'dateTime': new Date(), 'timerLimit': event.timerLimit, 'isResetClick': event.isResetClick }])
    else {
      this.eventsArray.push(event);
      this.countDownTimer$.next([...this.countDownTimer$.value, event]);
    }
  }

  onTimerLimitChange(event: number) {
    this.timerLimit$.next(event)
  }

  getTimerLogs(): Observable<any> {
    return this.countDownTimer$.pipe(
      map(items => items.filter(e => e.event !== null))
    )
  }

  getTimerStats(): Observable<any> {
    return this.countDownTimer$.pipe(
      map(items => items.filter(e => e.event !== null))
    )
  }
}
