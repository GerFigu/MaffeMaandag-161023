import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { Student } from 'src/app/generated/maffe-maandag.pb';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss']
})
export class StudentUpdateComponent implements OnInit {
  student: Student | undefined
  destroy$ = new Subject<boolean>();

  studentFormGroup = this.formBuilder.group({
    id: new FormControl<number | undefined>(0, {
      validators: [],
      nonNullable: true
    }),
    firstName: new FormControl<string | undefined>('', {
      validators: [
        Validators.required
      ],
      nonNullable: true
    }),
    lastName: new FormControl<string | undefined>('', {
      validators: [
        Validators.required
      ],
      nonNullable: true
    }),
    age: new FormControl<number | undefined>(0, {
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(120)
      ],
      nonNullable: true
    }),
  })

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) 
  {}

  ngOnInit(): void {
    const studentId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    
    this.studentService.getById(studentId).pipe(
      takeUntil(this.destroy$),
      map(student => {
        this.student = student    
        console.log(this.student)

        this.studentFormGroup.setValue({
          id: this.student?.id,
          firstName: this.student?.firstName,
          lastName: this.student?.lastName,
          age: this.student?.age,
        })
      })
    ).subscribe()
  }

  onSubmit = () => {
    const { valid, value } = this.studentFormGroup 

    if (!valid) {
      return
    }

    const student = new Student({
      id: value.id,
      age: value.age,
      firstName: value.firstName,
      lastName: value.lastName
    })

    this.studentService
      .update(student)
      .pipe(
        takeUntil(this.destroy$),
        map(() => {
          this.router.navigate(['students'])
        })
      ).subscribe()
  }
}
