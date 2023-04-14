import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheGrantComponent } from './about-the-grant.component';

describe('AboutTheGrantComponent', () => {
  let component: AboutTheGrantComponent;
  let fixture: ComponentFixture<AboutTheGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheGrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTheGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
