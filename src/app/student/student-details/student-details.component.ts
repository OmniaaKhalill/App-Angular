import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { routes } from '../../app.routes';

import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { StudentServiceService } from '../../_services/student-service.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit ,OnDestroy {

 std:Student=new Student(0,"",0);

  constructor(public activatedRoute:ActivatedRoute ,public studentService: StudentServiceService ) {
 
  
   
  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; // Convert id to number
      this.std = this.studentService.getById(id);
    });
  }

}


