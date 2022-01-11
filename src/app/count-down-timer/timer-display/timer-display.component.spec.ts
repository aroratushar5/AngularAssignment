import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDisplayComponent } from './timer-display.component';

describe('TimerDisplayComponent', () => {
  let component: TimerDisplayComponent;
  let fixture: ComponentFixture<TimerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerDisplayComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create be Trithy when  create', () => {
    expect(component).toBeTruthy();
  });
});