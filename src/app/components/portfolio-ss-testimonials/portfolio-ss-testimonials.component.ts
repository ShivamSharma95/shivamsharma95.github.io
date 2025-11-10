import { Component } from '@angular/core';
import { Assets } from '../../constants/portfolio-ss-images.model';

@Component({
  selector: 'app-portfolio-ss-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-ss-testimonials.component.html',
  styleUrl: './portfolio-ss-testimonials.component.css'
})
export class PortfolioSsTestimonialsComponent {
Images = Assets.FEEDBACK;
}
