import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B505MultiPurposeComponent } from './b505-multi-purpose.component';

describe('B505MultiPurposeComponent', () => {
  let component: B505MultiPurposeComponent;
  let fixture: ComponentFixture<B505MultiPurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B505MultiPurposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B505MultiPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
