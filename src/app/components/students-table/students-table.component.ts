import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {StudentsService} from "../../services/students.service";
import {Student} from "../../models/student.model";
import {Router} from "@angular/router";

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit{
  studentsObservable: Observable<Student[]>;

  constructor(private studentsService: StudentsService, private router: Router) {}

  ngOnInit(): void {
    this.studentsObservable = this.studentsService.getAllStudents();
  }

  handleNewUserClick() {
    this.router.navigate(['checkin']);
  }
}
