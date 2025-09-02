import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export default class AboutMeComponent implements OnInit {
  public ngOnInit(): void {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }
}
