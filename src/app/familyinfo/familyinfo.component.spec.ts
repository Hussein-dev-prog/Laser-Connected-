import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyinfoComponent } from './familyinfo.component';

describe('FamilyinfoComponent', () => {
  let component: FamilyinfoComponent;
  let fixture: ComponentFixture<FamilyinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
