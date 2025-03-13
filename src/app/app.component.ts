import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is present if using standalone components
  imports: [
    
    FooterComponent,
    HeaderComponent,RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lab1';
}