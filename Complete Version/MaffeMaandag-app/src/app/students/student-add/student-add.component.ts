import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, map } from 'rxjs';
import { Student } from 'src/app/generated/maffe-maandag.pb';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent {
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
    private router: Router) 
  {}

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
      .save(student)
      .pipe(
        map(() => {
          this.router.navigate(['students'])
        })
      ).subscribe()
  }
}
function takeUntil(destroy$: Subject<boolean>): import("rxjs").OperatorFunction<string, unknown> {
  throw new Error('Function not implemented.');
}

