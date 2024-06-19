import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAttendedComponent } from './un-attended.component';

describe('UnAttendedComponent', () => {
  let component: UnAttendedComponent;
  let fixture: ComponentFixture<UnAttendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnAttendedComponent]
    });
    fixture = TestBed.createComponent(UnAttendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
