import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Student } from '../../models/student';
import { FormsModule } from '@angular/forms';
import { StudentServiceService } from '../../_services/student-service.service';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent {
  nstd: Student = new Student(0, 'omnia', 25);


    constructor(public studentService: StudentServiceService) {

    }
  add(){
   this.studentService.addStudent(this.nstd)
  }
}
