import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B111DefenseRalliesComponent } from './b111-defense-rallies.component';

describe('B111DefenseRalliesComponent', () => {
  let component: B111DefenseRalliesComponent;
  let fixture: ComponentFixture<B111DefenseRalliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B111DefenseRalliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B111DefenseRalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
