import { Component } from '@angular/core';
import AboutMeComponent from './components/about-me/about-me.component';
import SkillsComponent from './components/skills/skills.component';
import { ExpirienceComponent } from './components/expirience/expirience.component';

@Component({
  selector: 'app-root',
  imports: [AboutMeComponent, SkillsComponent, ExpirienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Porfolio';
}
