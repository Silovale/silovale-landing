import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicityComponent } from './publicity.component';

describe('PublicityComponent', () => {
  let component: PublicityComponent;
  let fixture: ComponentFixture<PublicityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicityComponent]
    });
    fixture = TestBed.createComponent(PublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
