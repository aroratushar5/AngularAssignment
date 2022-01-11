export interface CountDownTimer {
  event: any;
  dateTime: Date;
  timerLimit: number;
  isResetClick: boolean;
}

export interface TimerLogs {
  event: string;
  dateTime: Date;
}
export interface TimerStats {
  numberOfStarts: number;
  numberOfPauses: number;
}