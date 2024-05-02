import { EventEmitter, Injectable, Output } from '@angular/core';
import { Student } from '../models/student/student';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  constructor() {}
  std: Student = new Student(0, '', 0);

  students: Student[] = [
    new Student(1, 'omnia1', 24),
    new Student(2, 'omnia2', 25),
    new Student(3, 'omnia3', 26),
  ];

  getallSudents() {
    return this.students;
  }

  delete(stdid: number): void {
    const index = this.students.findIndex((student) => student.id === stdid);

    this.students.splice(index, 1);
  }
  addStudent(s: Student) {
    this.students.push(new Student(s.id, s.name, s.age));
  }

  getById(id: Number) {
    const index = this.students.findIndex((student) => student.id === id);
    return this.students[index];
  }
}
