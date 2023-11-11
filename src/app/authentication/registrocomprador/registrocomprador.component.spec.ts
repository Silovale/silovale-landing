import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registrocompradorComponent } from './registrocomprador.component';

describe('registrocompradorComponent', () => {
  let component: registrocompradorComponent;
  let fixture: ComponentFixture<registrocompradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [registrocompradorComponent]
    });
    fixture = TestBed.createComponent(registrocompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
