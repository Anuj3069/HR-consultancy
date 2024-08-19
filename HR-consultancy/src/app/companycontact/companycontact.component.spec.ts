import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycontactComponent } from './companycontact.component';

describe('CompanycontactComponent', () => {
  let component: CompanycontactComponent;
  let fixture: ComponentFixture<CompanycontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanycontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanycontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
