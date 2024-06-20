import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Client } from '../../models/Client/client';

@Component({
  selector: 'app-client-profle',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './client-profle.component.html',
  styleUrl: './client-profle.component.css'
})
export class ClientProfleComponent {
constructor(public router:Router){

}
  url="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
  client:Client=new Client("omnia","khalil","01010101010","omnia@gmail.com","angu/src/assets/website-maintenance.png","alex");

  EditProfile(){
    this.router.navigateByUrl("/ClientForm")
  }
  CreateChefPage(){
    this.router.navigateByUrl("/ChefPageForm")
  }
}
