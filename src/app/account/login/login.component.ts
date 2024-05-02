import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string;

  constructor(public router:Router) {
    this.name = '';
  }
  login(){

    localStorage.setItem("token",this.name)  
   this.router.navigateByUrl("/home")
  }
}