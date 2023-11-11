import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passwordrecovery2Component } from './passwordrecovery2.component';

describe('Passwordrecovery2Component', () => {
  let component: Passwordrecovery2Component;
  let fixture: ComponentFixture<Passwordrecovery2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Passwordrecovery2Component]
    });
    fixture = TestBed.createComponent(Passwordrecovery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
