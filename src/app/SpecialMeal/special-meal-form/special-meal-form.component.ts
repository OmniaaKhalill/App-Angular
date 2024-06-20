import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

export enum Status { 
  Reqested = "Reqested", 
  Waited = "waited", 
  Done = "Done" 
}

export class SpecialMeal {
  constructor(
    public name: string,
    public description: string,
    public price_1: number,
    public price_2: number,
    public status: Status
  ) {}
}

@Component({
  selector: 'app-special-meal-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './special-meal-form.component.html',
  styleUrls: ['./special-meal-form.component.css']
})
export class SpecialMealFormComponent implements OnInit {
  specialMealForm: FormGroup;
  statusOptions = Object.values(Status);

  constructor(private fb: FormBuilder) {
    this.specialMealForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price_1: [null, [Validators.required, Validators.min(0)]],
      price_2: [null, [Validators.required, Validators.min(0)]],
     
    });
  }

  ngOnInit(): void {
    // You can further modify the form here if needed
  }

  updateProfile(): void {
    this.specialMealForm.patchValue({
      name: "Beef",
      description: "Yummy beef meal",
      price_1: 123,
      price_2: 234,
      status: Status.Done
    });
  }

  onSubmit(): void {
    if (this.specialMealForm.valid) {
      const specialMeal = new SpecialMeal(
        this.specialMealForm.value.name,
        this.specialMealForm.value.description,
        this.specialMealForm.value.price_1,
        this.specialMealForm.value.price_2,
        this.specialMealForm.value.status
      );
      console.log(specialMeal);
    } else {
      console.log('Form is invalid');
    }
  }
}
