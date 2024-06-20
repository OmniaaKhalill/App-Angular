import { Component } from '@angular/core';
import { SpecialMeal, Status } from '../../models/SpecialMeal/special-meal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  meal = new SpecialMeal("beef", "ytfyfy",123,234,   Status.Done )


}
