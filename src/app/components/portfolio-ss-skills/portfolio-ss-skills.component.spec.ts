import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSsSkillsComponent } from './portfolio-ss-skills.component';

describe('PortfolioSsSkillsComponent', () => {
  let component: PortfolioSsSkillsComponent;
  let fixture: ComponentFixture<PortfolioSsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSsSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
