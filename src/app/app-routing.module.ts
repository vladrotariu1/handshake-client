import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsTableComponent} from "./components/students-table/students-table.component";
import {CheckInStudentComponent} from "./components/create-student/check-in-student.component";

const routes: Routes = [
  {
    path: '',
    component: StudentsTableComponent
  },
  {
    path: 'checkin',
    component: CheckInStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
