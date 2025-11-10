import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsWorkComponent } from './portfolio-ss-work.component';

describe('PortfolioSsWorkComponent', () => {
  let component: PortfolioSsWorkComponent;
  let fixture: ComponentFixture<PortfolioSsWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
