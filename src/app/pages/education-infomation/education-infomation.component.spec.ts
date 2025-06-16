import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationInfomationComponent } from './education-infomation.component';

describe('EducationInfomationComponent', () => {
  let component: EducationInfomationComponent;
  let fixture: ComponentFixture<EducationInfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationInfomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
