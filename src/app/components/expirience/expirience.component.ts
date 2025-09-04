import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import * as AOS from 'aos';
import { TranslateDatePipe } from '../../../core/pipes/translate-date.pipe';

@Component({
  selector: 'app-expirience',
  standalone: true,
  imports: [TranslatePipe, TranslateDatePipe],
  templateUrl: './expirience.component.html',
  styleUrl: './expirience.component.scss'
})
export class ExpirienceComponent implements OnInit {
  public experience = [
    {
      company: 'EPAM Systems',
      dateStart: '2024-03-01',
      dateEnd: '2025-07-01',
      position: 'Senior Front End Engineer',
      description: 'EXPERIENCE.DESCRIPTION.EPAM'
    },
    {
      company: 'Vates',
      dateStart: '2021-08-01',
      dateEnd: '2024-03-01',
      position: 'Senior Front End Engineer',
      description: 'EXPERIENCE.DESCRIPTION.VATES'
    },
    {
      company: 'BIZIT GLOBAL',
      dateStart: '2020-03-01',
      dateEnd: '2021-08-01',
      position: 'Senior Front End Engineer',
      description: 'EXPERIENCE.DESCRIPTION.BIZIT'
    },
    {
      company: 'KOLEKTOR',
      dateStart: '2019-02-01',
      dateEnd: '2020-03-01',
      position: 'Senior Front End Engineer',
      description: 'EXPERIENCE.DESCRIPTION.KOLEKTOR'
    },
    {
      company: 'McAfee Argentina',
      dateStart: '2018-01-01',
      dateEnd: '2018-12-01',
      position: 'Technical Intern Engineer',
      description: 'EXPERIENCE.DESCRIPTION.MCAFEE'
    }
  ];

  public ngOnInit(): void {
    AOS.init({
      duration: 1500,
      once: false
    });
  }
}
