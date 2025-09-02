import { Component, OnInit } from '@angular/core';
import AboutMeComponent from './components/about-me/about-me.component';
import SkillsComponent from './components/skills/skills.component';
import { ExpirienceComponent } from './components/expirience/expirience.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AboutMeComponent, SkillsComponent, ExpirienceComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  mode: 'light' | 'dark' = 'dark';

  public ngOnInit() {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      this.mode = savedMode as 'light' | 'dark';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.mode = prefersDark ? 'dark' : 'light';
    }
    this.applyTheme();
  }

  public toggleTheme() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.mode);
    this.applyTheme();
  }

  private applyTheme() {
    document.body.className = this.mode === 'dark' ? 'dark-theme' : 'light-theme';
  }
}
