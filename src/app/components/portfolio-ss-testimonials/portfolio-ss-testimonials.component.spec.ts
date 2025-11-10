import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsTestimonialsComponent } from './portfolio-ss-testimonials.component';

describe('PortfolioSsTestimonialsComponent', () => {
  let component: PortfolioSsTestimonialsComponent;
  let fixture: ComponentFixture<PortfolioSsTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
