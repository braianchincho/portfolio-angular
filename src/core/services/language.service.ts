import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLang = signal<'en' | 'es'>('en');

  public constructor(private translate: TranslateService) {}

  public changeLanguage(lang: 'en' | 'es') {
    this.currentLang.set(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}