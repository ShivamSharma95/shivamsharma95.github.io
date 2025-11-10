import { AfterViewInit, Component } from '@angular/core';
import { Assets } from '../../constants/portfolio-ss-images.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-ss-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-ss-projects.component.html',
  styleUrl: './portfolio-ss-projects.component.css'
})
export class PortfolioSsProjectsComponent implements AfterViewInit {
  slideIndex = 1;
  protected readonly Project = Assets.PROJECT;

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  private showSlides(n: number): void {
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

    if (slides.length === 0) return;

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }

}