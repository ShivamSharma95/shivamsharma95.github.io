import { Component } from '@angular/core';
import { Assets } from '../../constants/portfolio-ss-images.model';
import { ViewportScroller } from '@angular/common';
import { scrollToSection } from '../../utils/common.service';

@Component({
  selector: 'app-portfolio-ss-self',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-ss-self.component.html',
  styleUrl: './portfolio-ss-self.component.css'
})
export class PortfolioSsSelfComponent {
  self = Assets
  constructor(private viewportScroller: ViewportScroller) { }
  scrollTo(anchor: string): void {
    scrollToSection(this.viewportScroller, anchor);
  }
}
