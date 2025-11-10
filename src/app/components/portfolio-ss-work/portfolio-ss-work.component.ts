import { Component } from '@angular/core';
import { Assets } from '../../constants/portfolio-ss-images.model';

@Component({
  selector: 'app-portfolio-ss-work',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-ss-work.component.html',
  styleUrl: './portfolio-ss-work.component.css'
})
export class PortfolioSsWorkComponent {
Images = Assets.COMPANY;
}
