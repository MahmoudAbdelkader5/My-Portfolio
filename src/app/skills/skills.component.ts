import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  // List of skills with names and percentages
  skills = [
    { name: 'c#', percentage: 90 },
    { name: 'Sql Server', percentage: 90 },
    { name: '.net core', percentage: 85 },
    { name: 'HTML/CSS', percentage: 95 },

    { name: 'JavaScript', percentage: 80 },
    { name: 'TypeScript', percentage: 75 },
    { name: 'Angular', percentage: 90 },
  ];

  getSkillColor(percentage: number): string {
    if (percentage >= 80) {
      return 'linear-gradient(90deg, #4caf50, #81c784)'; 
    } else if (percentage >= 60) {
      return 'linear-gradient(90deg, #ff9800, #ffb74d)'; 
    } else {
      return 'linear-gradient(90deg, #f44336, #e57373)'; 
    }
  }
}