import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInStudentComponent } from './check-in-student.component';

describe('CreateStudentComponent', () => {
  let component: CheckInStudentComponent;
  let fixture: ComponentFixture<CheckInStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckInStudentComponent]
    });
    fixture = TestBed.createComponent(CheckInStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
