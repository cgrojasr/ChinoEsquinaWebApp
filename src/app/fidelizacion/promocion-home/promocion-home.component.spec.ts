import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionHomeComponent } from './promocion-home.component';

describe('PromocionHomeComponent', () => {
  let component: PromocionHomeComponent;
  let fixture: ComponentFixture<PromocionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
