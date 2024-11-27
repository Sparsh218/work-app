import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent {

  username = "";

  resetUsername() {
    this.username = "";
  }

  getColor() {
    return this.username === '' ? 'red' : 'green';
  }
}
