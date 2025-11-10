import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsProjectsComponent } from './portfolio-ss-projects.component';

describe('PortfolioSsProjectsComponent', () => {
  let component: PortfolioSsProjectsComponent;
  let fixture: ComponentFixture<PortfolioSsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
