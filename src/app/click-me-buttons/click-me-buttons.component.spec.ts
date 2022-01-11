import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickMeButtonsComponent } from './click-me-buttons.component';

describe('ClickMeButtonsComponent', () => {
  let component: ClickMeButtonsComponent;
  let fixture: ComponentFixture<ClickMeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickMeButtonsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickMeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be Truthy when create', () => {
    expect(component).toBeTruthy();
  });
});
