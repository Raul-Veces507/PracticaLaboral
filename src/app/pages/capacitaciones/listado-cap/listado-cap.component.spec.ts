import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCapComponent } from './listado-cap.component';

describe('ListadoCapComponent', () => {
  let component: ListadoCapComponent;
  let fixture: ComponentFixture<ListadoCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
