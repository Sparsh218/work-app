import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WarningAlertComponent } from "./components/alerts/warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./components/alerts/success-alert/success-alert.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WarningAlertComponent, SuccessAlertComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonEnabled = false;
  text = "";
  constructor() {

    setTimeout(() => {
      this.buttonEnabled = true;
    }, 2000);

  }

  title = 'work-app';

  readText(text : any) {
    console.log(text);
  }
}
