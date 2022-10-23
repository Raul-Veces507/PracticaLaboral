import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActividadComponent } from './listado-actividad.component';

describe('ListadoActividadComponent', () => {
  let component: ListadoActividadComponent;
  let fixture: ComponentFixture<ListadoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoActividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
