import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicinfoComponent } from './academicinfo.component';

describe('AcademicinfoComponent', () => {
  let component: AcademicinfoComponent;
  let fixture: ComponentFixture<AcademicinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
