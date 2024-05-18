import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-skill-component',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, ContactDetailsComponent, WorkExperienceComponent],
  templateUrl: './skill-component.component.html',
  styleUrl: './skill-component.component.scss'
})
export class SkillComponentComponent {

}
