import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentDetailsComponent,NavbarComponent,HeaderComponent , StudentListComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angu';

}
