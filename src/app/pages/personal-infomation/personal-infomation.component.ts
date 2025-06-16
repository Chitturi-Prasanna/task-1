import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

interface gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-personal-infomation',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatOptionModule,
    MatSelect,
    MatDatepickerModule
  ],
  templateUrl: './personal-infomation.component.html',
  styleUrl: './personal-infomation.component.scss'
})
export class PersonalInfomationComponent {
  private _formBuilder = inject(FormBuilder);

  formGroup: FormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address: ['', Validators.required],
    gender: ['', Validators.required],
    dob: ['', Validators.required],
  });
  gender: gender[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'others', viewValue: 'Others' },
  ];

  onSubmit() {
    console.log(this.formGroup.value)
  }
}
