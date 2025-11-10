import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsAboutComponent } from './portfolio-ss-about.component';

describe('PortfolioSsAboutComponent', () => {
  let component: PortfolioSsAboutComponent;
  let fixture: ComponentFixture<PortfolioSsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
