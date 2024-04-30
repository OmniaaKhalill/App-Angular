import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [   CommonModule, FormsModule ,StudentAddComponent,StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
std:Student=new Student(0,"",0);
students:Student[]=[
  new Student(1,"omnia1",24),
  new Student(2,"omnia2",25),
  new Student(3,"omnia3",26)
]


delete(stdid: number): void {
  const index = this.students.findIndex(student => student.id === stdid);
  
    this.students.splice(index, 1); 
 
}
change(s :Student){
  this.students.push(new Student(s.id, s.name, s.age));

}

stdDtails:Student=new Student(0,"",0);

showDetails(id:Number){
  const index = this.students.findIndex(student => student.id === id);
  this.stdDtails=this.students[index]
}
}
