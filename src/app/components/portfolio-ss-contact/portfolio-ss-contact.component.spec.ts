import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsContactComponent } from './portfolio-ss-contact.component';

describe('PortfolioSsContactComponent', () => {
  let component: PortfolioSsContactComponent;
  let fixture: ComponentFixture<PortfolioSsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
