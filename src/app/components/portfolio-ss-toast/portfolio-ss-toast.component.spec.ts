import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsToastComponent } from './portfolio-ss-toast.component';

describe('PortfolioSsToastComponent', () => {
  let component: PortfolioSsToastComponent;
  let fixture: ComponentFixture<PortfolioSsToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsToastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
