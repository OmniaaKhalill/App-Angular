import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-out',
  standalone: true,
  imports: [],
  templateUrl: './login-out.component.html',
  styleUrl: './login-out.component.css'
})
export class LoginOutComponent {

  constructor(public router :Router){
    localStorage.clear();
    router.navigateByUrl("/home")
  }

  
}
