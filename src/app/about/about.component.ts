import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,  

  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

export class AboutComponent {


  // Bio information
  bio: string =
    'Aspiring .NET Developer with a passion for building innovative and scalable web applications. Eager to leverage strong technical expertise in .NET technologies, along with hands-on experience in full-stack development, to contribute to impactful projects.';

  // Education information
  education: string =
    'Bachelor of Computers and Information, Computer Science Major — Fayoum University (July 2022)\n' +
    'Grade: Very Good with Honors (72%)\n' +
    'Graduation Project: Text Classification Model (Grade: 88%)\n' +
    'Developed a model to predict 6 emotion classes in a French dataset using LSTM, GRU, and BERT architectures. Achieved 92% accuracy on real-world data.';

  // Experience information
  experience: string =
    'Email Marketing Specialist — Admedia Consulting, Cairo, Egypt\n' +
    'Responsibilities:\n' +
    '- Designed and executed email marketing campaigns.\n' +
    '- Analyzed campaign performance and optimized strategies.\n' +
    '- Collaborated with cross-functional teams to achieve marketing goals.';
    img:string= 'C:/Users/master/Videos/Angular/lab1/src/assets/man.JPEG';
    

   
}