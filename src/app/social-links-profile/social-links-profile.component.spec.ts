import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksProfileComponent } from './social-links-profile.component';

describe('SocialLinksProfileComponent', () => {
  let component: SocialLinksProfileComponent;
  let fixture: ComponentFixture<SocialLinksProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinksProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialLinksProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
