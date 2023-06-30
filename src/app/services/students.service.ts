import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  readonly checkInApiUrl = 'http://localhost:3000/students';
  readonly majorApiUrl = 'https://ios-interview.joinhandshake-internal.com/majors';

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.checkInApiUrl);
  }

  checkInStudent(student: {
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    email: string | null | undefined;
    major: string | null | undefined;
  }): Observable<any> {
    return this.httpClient.post(this.checkInApiUrl, {
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      major: student.major
    });
  }

  getMajors(): Observable<any> {
    return this.httpClient.get(this.majorApiUrl);
  }
}
