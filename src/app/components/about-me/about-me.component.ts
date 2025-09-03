import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export default class AboutMeComponent implements OnInit {
  public ngOnInit(): void {
    AOS.init({
      duration: 3000,
      mirror: true,
    });
  }
}
