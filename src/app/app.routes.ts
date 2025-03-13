import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/hero', pathMatch: 'full' },  
    { path: 'hero', component: HeroComponent },  
    { path: 'about', component: AboutComponent },  
    { path: 'skills', component: SkillsComponent },  
    { path: 'portfolio', component: PortfolioComponent },  
];
