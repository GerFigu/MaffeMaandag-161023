import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsOverviewComponent } from './students/students-overview/students-overview.component';
import { StudentUpdateComponent } from './students/student-update/student-update.component';
import { StudentAddComponent } from './students/student-add/student-add.component';

const routes: Routes = [
  { path: 'students', component: StudentsOverviewComponent },
  { path: 'students/update/:id', component: StudentUpdateComponent },
  { path: 'students/add', component: StudentAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
