import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioSsNavBarComponent } from "./components/portfolio-ss-nav-bar/portfolio-ss-nav-bar.component";
import { PortfolioSsSelfComponent } from "./components/portfolio-ss-self/portfolio-ss-self.component";
import { PortfolioSsAboutComponent } from "./components/portfolio-ss-about/portfolio-ss-about.component";
import { PortfolioSsSkillsComponent } from "./components/portfolio-ss-skills/portfolio-ss-skills.component";
import { PortfolioSsProjectsComponent } from "./components/portfolio-ss-projects/portfolio-ss-projects.component";
import { PortfolioSsWorkComponent } from "./components/portfolio-ss-work/portfolio-ss-work.component";
import { PortfolioSsContactComponent } from "./components/portfolio-ss-contact/portfolio-ss-contact.component";
import { PortfolioSsTestimonialsComponent } from "./components/portfolio-ss-testimonials/portfolio-ss-testimonials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioSsNavBarComponent, PortfolioSsSelfComponent, PortfolioSsAboutComponent, PortfolioSsSkillsComponent, PortfolioSsProjectsComponent, PortfolioSsWorkComponent, PortfolioSsContactComponent, PortfolioSsTestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-shivam-sharma';
}
