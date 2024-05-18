import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SkillComponentComponent } from '../skill-component/skill-component.component';
import { WizardFinishedComponent } from '../wizard-finished/wizard-finished.component';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, SkillComponentComponent, WizardFinishedComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {

}
