import { Component, computed, OnInit, Signal } from '@angular/core';
import AboutMeComponent from './components/about-me/about-me.component';
import SkillsComponent from './components/skills/skills.component';
import { ExpirienceComponent } from './components/expirience/expirience.component';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [
    AboutMeComponent,
    SkillsComponent,
    ExpirienceComponent,
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  mode: 'light' | 'dark' = 'dark';
  currentLang!: Signal<'en' | 'es'>;
  currentLangLabel = computed(() => this.currentLang().toUpperCase());
  
  public constructor(private languange: LanguageService) {
    this.currentLang = languange.currentLang;
  }

  public ngOnInit() {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      this.mode = savedMode as 'light' | 'dark';
    }
    this.applyTheme();
  }

  public toggleTheme() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.mode);
    this.applyTheme();
  }

  public changeLanguage(lang: 'en' | 'es') {
    this.languange.changeLanguage(lang);
  }

  private applyTheme() {
    document.body.className = this.mode === 'dark' ? 'dark-theme' : 'light-theme';
  }
}
