import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEquipoComponent } from './modal-agregar-equipo.component';

describe('ModalAgregarEquipoComponent', () => {
  let component: ModalAgregarEquipoComponent;
  let fixture: ComponentFixture<ModalAgregarEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
