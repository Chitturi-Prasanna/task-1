import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-education-infomation',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatOptionModule,
    MatButtonModule,
    MatIcon
  ],

  templateUrl: './education-infomation.component.html',
  styleUrl: './education-infomation.component.scss'
})
export class EducationInfomationComponent {
  @Output() resetStepper = new EventEmitter<void>();
  private _formBuilder = inject(FormBuilder);

  formGroup = this._formBuilder.group({
    educationArray: this._formBuilder.array([this.createEducationGroup()])
  });

  get educationArray(): FormArray {
    return this.formGroup.get('educationArray') as FormArray;
  }

  get typedEducationArray(): FormGroup[] {
    return this.educationArray.controls as FormGroup[];
  }

  createEducationGroup(): FormGroup {
    return this._formBuilder.group({
      highSchool: ['', Validators.required],
      gpa: ['', Validators.required],
      intendedMajor: ['', Validators.required],
      secondaryMajor: [''],
      extracurricular: ['', Validators.required]
    });
  }

  onAddClick() {
    this.educationArray.push(this.createEducationGroup());
  }

  onSubmit() {
    console.log(this.formGroup.value.educationArray);
  }

  onReset(): void {
    this.resetStepper.emit();
  }

  onRemoveClick(index: number): void {
    this.educationArray.removeAt(index);
  }

}
