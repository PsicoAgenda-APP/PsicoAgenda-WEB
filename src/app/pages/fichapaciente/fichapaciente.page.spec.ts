import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichapacientePage } from './fichapaciente.page';

describe('FichapacientePage', () => {
  let component: FichapacientePage;
  let fixture: ComponentFixture<FichapacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FichapacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
