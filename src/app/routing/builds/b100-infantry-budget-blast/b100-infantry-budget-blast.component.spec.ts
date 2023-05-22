import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B100InfantryBudgetBlastComponent } from './b100-infantry-budget-blast.component';

describe('B100InfantryBudgetBlastComponent', () => {
  let component: B100InfantryBudgetBlastComponent;
  let fixture: ComponentFixture<B100InfantryBudgetBlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B100InfantryBudgetBlastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B100InfantryBudgetBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
