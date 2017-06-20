export interface TimeUnit {
  hour?: number;
  minute?: number;
  seconds?: number;
}

export interface TimepickerControls {
  canIncrementHours: boolean;
  canIncrementMinutes: boolean;
  canIncrementSeconds: boolean;

  canDecrementHours: boolean;
  canDecrementMinutes: boolean;
  canDecrementSeconds: boolean;
}

export interface TimepickerComponentState {
  min: Date;
  max: Date;

  hourStep: number;
  minuteStep: number;
  secondsStep: number;

  readonlyInput: boolean;

  mousewheel: boolean;
  arrowkeys: boolean;

  showSpinners: boolean;
  showMeridian: boolean;
  showSeconds: boolean;

  meridians: string[];
}

export type TimeChangeSource = 'wheel' | 'key' | '';

export interface TimeChangeEvent {
  step: number;
  source: TimeChangeSource;
}
