import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B001CavalryBudgetBlastComponent } from './b001-cavalry-budget-blast.component';

describe('B001CavalryBudgetBlastComponent', () => {
  let component: B001CavalryBudgetBlastComponent;
  let fixture: ComponentFixture<B001CavalryBudgetBlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B001CavalryBudgetBlastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B001CavalryBudgetBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
