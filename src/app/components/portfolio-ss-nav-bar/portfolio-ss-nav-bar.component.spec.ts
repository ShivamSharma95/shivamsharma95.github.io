import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsNavBarComponent } from './portfolio-ss-nav-bar.component';

describe('PortfolioSsNavBarComponent', () => {
  let component: PortfolioSsNavBarComponent;
  let fixture: ComponentFixture<PortfolioSsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
