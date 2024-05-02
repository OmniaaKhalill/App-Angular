import { Component } from '@angular/core';
import { StudentDetailsComponent } from '../../student/student-details/student-details.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  name ="Omnia";
  fun1(s:string){
    this.name=s;
  }
  
  fun2(s:string){
    this.name=s;
  }
  
}
