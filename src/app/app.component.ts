import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormContainerComponent } from './shared/form-container/form-container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FormContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '01.task1';

}
