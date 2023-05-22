import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B010RangedBudgetBlastComponent } from './b010-ranged-budget-blast.component';

describe('B010RangedBudgetBlastComponent', () => {
  let component: B010RangedBudgetBlastComponent;
  let fixture: ComponentFixture<B010RangedBudgetBlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B010RangedBudgetBlastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B010RangedBudgetBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
