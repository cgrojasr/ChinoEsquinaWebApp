import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionGestionarComponent } from './promocion-gestionar.component';

describe('PromocionGestionarComponent', () => {
  let component: PromocionGestionarComponent;
  let fixture: ComponentFixture<PromocionGestionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionGestionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
