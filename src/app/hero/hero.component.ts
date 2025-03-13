import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name: string = 'abdelkader';
  jobTitle: string = 'BackEnd Web Developer (.NET) ';
}
