import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateDate',
  standalone: true,
  pure: false
})
export class TranslateDatePipe implements PipeTransform {
  constructor(private translate: TranslateService, private datePipe: DatePipe) {}

  transform(value: Date | string, format = 'MMM yyyy'): string | null {
    const lang = this.translate.getCurrentLang() || 'en';
    return this.datePipe.transform(value, format, undefined, lang);
  }

}
