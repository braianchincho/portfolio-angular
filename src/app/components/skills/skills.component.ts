import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export default class SkillsComponent implements OnInit {
    public ngOnInit(): void {
      AOS.init({
        duration: 1500,
        once: false
      });
    }
}
