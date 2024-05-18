import { Routes } from '@angular/router';
import { AboutComponent  } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';


export const routes: Routes = [
    { path: "h1/home", component: HomeComponent},
    { path: "h2/about", component: AboutComponent },
    { path: "h1/personal-details", component: PersonalDetailsComponent },
    { path: "h1/contact-details", component: ContactDetailsComponent },
    { path: "h1/skill", component: SkillComponentComponent },
    { path: "h1/work-exp", component: WorkExperienceComponent },
    { path: "h1/finish", component: WizardFinishedComponent }
];
