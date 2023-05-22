import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B010RangedBlastComponent } from './b010-ranged-blast.component';

describe('B010RangedBlastComponent', () => {
  let component: B010RangedBlastComponent;
  let fixture: ComponentFixture<B010RangedBlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B010RangedBlastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B010RangedBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
