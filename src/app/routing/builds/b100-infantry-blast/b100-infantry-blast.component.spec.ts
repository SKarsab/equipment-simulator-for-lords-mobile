import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B100InfantryBlastComponent } from './b100-infantry-blast.component';

describe('B100InfantryBlastComponent', () => {
  let component: B100InfantryBlastComponent;
  let fixture: ComponentFixture<B100InfantryBlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B100InfantryBlastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B100InfantryBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
