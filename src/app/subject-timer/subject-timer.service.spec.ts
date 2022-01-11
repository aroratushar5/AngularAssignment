import { TestBed } from '@angular/core/testing';

import { SubjectTimerService } from './subject-timer.service';

describe('SubjectTimerService', () => {
  let service: SubjectTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
