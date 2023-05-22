import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B001CavalryBlastComponent } from './b001-cavalry-blast.component';

describe('B001CavalryBlastComponent', () => {
  let component: B001CavalryBlastComponent;
  let fixture: ComponentFixture<B001CavalryBlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B001CavalryBlastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B001CavalryBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
