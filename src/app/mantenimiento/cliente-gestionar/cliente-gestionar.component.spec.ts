import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGestionarComponent } from './cliente-gestionar.component';

describe('ClienteGestionarComponent', () => {
  let component: ClienteGestionarComponent;
  let fixture: ComponentFixture<ClienteGestionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteGestionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
