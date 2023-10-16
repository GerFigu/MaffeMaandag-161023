import { BehaviorSubject, map } from "rxjs"
import { Student, EmptyRequest, StudentGetRequest, StudentCreateRequest, StudentDeleteRequest, StudentUpdateRequest } from "../generated/maffe-maandag.pb"
import { StudentServiceClient } from "../generated/maffe-maandag.pbsc"
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private students = new BehaviorSubject<Student[]>([])
  students$ = this.students.asObservable()
    
  constructor(private studentsClient: StudentServiceClient) 
  {}
    
  loadStudents() {
    return this.studentsClient.studentsGetAll(new EmptyRequest()).pipe(
      map(response => this.students.next(response.students ?? []))
    )
  }

  getById(id: number) {
    return this.studentsClient.studentGet(new StudentGetRequest({ id }))
    .pipe(map(response => response.student))
  }

  save(student: Student) {
    return this.studentsClient.studentCreate(
      new StudentCreateRequest({ student }))
  }

  delete(id: number) {
    return this.studentsClient.studentDelete(new StudentDeleteRequest({ id }))
  }

  update(student: Student) {
    return this.studentsClient.studentUpdate(new StudentUpdateRequest({ student }))
      .pipe(map(response => response.fullName))
  }

  reset() {
    return this.studentsClient.studentsReset(new EmptyRequest()).pipe(
      map(response => this.students.next(response.students ?? []))
    )
  }
}
