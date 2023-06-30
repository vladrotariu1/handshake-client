import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentsService} from "../../services/students.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'create-student',
  templateUrl: './check-in-student.component.html',
  styleUrls: ['./check-in-student.css']
})
export class CheckInStudentComponent implements OnInit{
  checkInSubscription: Subscription;
  showError = false;

  createStudentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
  });

  majors$: Observable<any>;

  constructor(private studentsService: StudentsService, private router: Router) {}

  ngOnInit(): void {
    this.majors$ = this.studentsService.getMajors();

    const subscription = this.majors$.subscribe();
  }

  handleCheckInStudent() {
    this.checkInSubscription = this.studentsService.checkInStudent({
      firstName: this.createStudentForm.value.firstName,
      lastName: this.createStudentForm.value.lastName,
      email: this.createStudentForm.value.email,
      major: this.createStudentForm.value.major
    }).subscribe( student => {
      this.router.navigate(['']);
    },
        error => {
      this.showError = true;
          });
  }
}
