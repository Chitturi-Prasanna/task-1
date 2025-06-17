import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-sign-up',
  imports: [MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{
  ngOnInit() {
    const storedData = localStorage.getItem('loginInfo');
    if (storedData) {
      this.formGroup.patchValue(JSON.parse(storedData));
    }

    this.formGroup.valueChanges.subscribe(value => {
      localStorage.setItem('loginInfo', JSON.stringify(value));
    });
  }
  
  private _formBuilder = inject(FormBuilder);

  formGroup: FormGroup = this._formBuilder.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  onSubmit() {
    console.log(this.formGroup.value)
    localStorage.setItem('loginInfo',JSON.stringify(this.formGroup.value))
  }

}
