import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { SkillComponentComponent } from '../skill-component/skill-component.component';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, PersonalDetailsComponent, SkillComponentComponent ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {

}
