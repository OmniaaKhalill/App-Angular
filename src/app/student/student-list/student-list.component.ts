import { Component } from '@angular/core';
import { Student } from '../../models/student/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentServiceService } from '../../_services/student-service.service';
import { NavigationExtras, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StudentAddComponent,
    StudentDetailsComponent,
    RouterOutlet,
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  constructor(
    public studentService: StudentServiceService,
    public router: Router
  ) {}

  students: Student[] = this.studentService.getallSudents();

  delete(stdid: number): void {
    this.studentService.delete(stdid);
  }

  showDetails(stdId: number) {
    // Constructing navigation extras with the id parameter
    const navigationExtras: NavigationExtras = {
      state: {
        id: stdId,
      },
    };

    // Navigating to the route with navigation extras
    this.router.navigateByUrl(`/students/details/${stdId}`, navigationExtras);
  }
}
