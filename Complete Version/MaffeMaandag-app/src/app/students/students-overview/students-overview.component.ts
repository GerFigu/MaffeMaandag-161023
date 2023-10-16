import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, map, takeUntil } from 'rxjs';
import { Student } from 'src/app/generated/maffe-maandag.pb';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-overview',
  templateUrl: './students-overview.component.html',
  styleUrls: ['./students-overview.component.scss']
})
export class StudentsOverviewComponent implements OnInit, OnDestroy {
  isLoading$ = new BehaviorSubject<boolean>(true)
  private destroy$ = new Subject<boolean>()
  students : Array<Student> = []

  constructor(
    private studentService: StudentService,
    private router: Router)
  {}

  ngOnInit(): void {
    this.studentService.loadStudents().subscribe()

    this.studentService.students$.pipe(
      map(students => this.students = students),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }

  onEdit(id: number) {
    this.router.navigate(['students', 'update', id])
  }

  onDelete(id: number): void {
    this.studentService.delete(id).pipe(
      map(_ => {
        this.studentService.loadStudents()
        window.location.reload();
      }))
    .subscribe()
  }

  onCreate() {
    this.router.navigate(['students', 'add'])
  }

  onReset() {
    this.studentService.reset().subscribe()

    this.studentService.students$.pipe(
      map(students => this.students = students),
      takeUntil(this.destroy$)
    ).subscribe()
  }
}
