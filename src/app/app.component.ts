import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterModule, AboutComponent, HomeComponent]
})
export class AppComponent {
  title = 'TaskTrial';
}
