import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registrovendedorComponent } from './registrovendedor.component';

describe('registrovendedorComponent', () => {
  let component: registrovendedorComponent;
  let fixture: ComponentFixture<registrovendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [registrovendedorComponent]
    });
    fixture = TestBed.createComponent(registrovendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
