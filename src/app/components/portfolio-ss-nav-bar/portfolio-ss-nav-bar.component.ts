import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { scrollToSection } from '../../utils/common.service';
import { Assets } from '../../constants/portfolio-ss-images.model';

@Component({
  selector: 'app-portfolio-ss-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-ss-nav-bar.component.html',
  styleUrl: './portfolio-ss-nav-bar.component.css'
})
export class PortfolioSsNavBarComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  scrollTo(anchor: string): void {
    scrollToSection(this.viewportScroller, anchor);
  }
  readonly resume = Assets.RESUME;
}
