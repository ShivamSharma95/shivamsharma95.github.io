import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsSelfComponent } from './portfolio-ss-self.component';

describe('PortfolioSsSelfComponent', () => {
  let component: PortfolioSsSelfComponent;
  let fixture: ComponentFixture<PortfolioSsSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsSelfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
