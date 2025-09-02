import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-expirience',
  standalone: true,
  imports: [],
  templateUrl: './expirience.component.html',
  styleUrl: './expirience.component.scss'
})
export class ExpirienceComponent implements OnInit {
  public ngOnInit(): void {
    AOS.init({
      duration: 1500,
      once: false
    });
  }
}
