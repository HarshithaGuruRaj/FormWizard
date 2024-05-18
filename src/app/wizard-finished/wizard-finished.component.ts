import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-wizard-finished',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, HomeComponent],
  templateUrl: './wizard-finished.component.html',
  styleUrl: './wizard-finished.component.scss'
})
export class WizardFinishedComponent {

}
