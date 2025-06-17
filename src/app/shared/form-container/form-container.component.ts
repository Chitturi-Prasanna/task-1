import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';
import { PersonalInfomationComponent } from '../../pages/personal-infomation/personal-infomation.component';
import { EducationInfomationComponent } from '../../pages/education-infomation/education-infomation.component';

@Component({
  selector: 'app-form-container',
  imports: [MatStepperModule, SignUpComponent, PersonalInfomationComponent, EducationInfomationComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent {
  isLinear = false;
}
