import { Component } from '@angular/core';
import { Assets } from '../../constants/portfolio-ss-images.model';
import { ViewportScroller } from '@angular/common';
import { scrollToSection } from '../../utils/common.service';

@Component({
  selector: 'app-portfolio-ss-about',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-ss-about.component.html',
  styleUrl: './portfolio-ss-about.component.css'
})
export class PortfolioSsAboutComponent {
  Images = Assets;
  constructor(private viewportScroller: ViewportScroller) { }
  scrollTo(anchor: string): void {
    scrollToSection(this.viewportScroller, anchor);
  }
}
