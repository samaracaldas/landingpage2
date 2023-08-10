import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosCursosComponent } from './nossos-cursos.component';

describe('NossosCursosComponent', () => {
  let component: NossosCursosComponent;
  let fixture: ComponentFixture<NossosCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NossosCursosComponent]
    });
    fixture = TestBed.createComponent(NossosCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
