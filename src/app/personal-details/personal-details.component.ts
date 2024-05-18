import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, ContactDetailsComponent],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {

}
