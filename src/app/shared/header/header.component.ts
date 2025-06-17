import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports:  [MatToolbarModule,MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  reset(){
    console.log('reset')
    localStorage.clear()
    window.location.reload();
  }
}
