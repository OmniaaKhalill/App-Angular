import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client/client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-client-profle-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client-profle-form.component.html',
  styleUrl: './client-profle-form.component.css'
})
export class ClientProfleFormComponent implements OnInit {
client!:Client
constructor(public router:Router){

}
  ngOnInit() {
     this.client=new Client("omnia","khalil","01010101010","omnia@gmail.com","/Users/omnia/Downloads/GORtb3qXcAIUCWy.jpeg","alex");
  }

  url="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"

  UpdatePhoto(e:any){
    if(e.target.files){
   var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=(event:any)=>{
  this.url=event.target.result;
 
}}

}

UpdateProfile(){
  this.router.navigateByUrl("/profile")
}


}
