import { Component, inject, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';
import { PersonalInfomationComponent } from '../../pages/personal-infomation/personal-infomation.component';
import { EducationInfomationComponent } from '../../pages/education-infomation/education-infomation.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-form-container',
  imports: [MatStepperModule, SignUpComponent, PersonalInfomationComponent, EducationInfomationComponent],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss'
})
export class FormContainerComponent implements OnInit{
  selectedIndex = 0;
  ngOnInit() {
    const storedStep = localStorage.getItem('activeStepIndex');
    if (storedStep !== null) {
      this.selectedIndex = +storedStep;
    }
  }

  onStepChange(event: StepperSelectionEvent) {
    localStorage.setItem('activeStepIndex', event.selectedIndex.toString());
  }
  isLinear = true;
}
