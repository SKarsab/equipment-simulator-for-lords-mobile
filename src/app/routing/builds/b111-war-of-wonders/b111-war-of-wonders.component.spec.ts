import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B111WarOfWondersComponent } from './b111-war-of-wonders.component';

describe('B111WarOfWondersComponent', () => {
  let component: B111WarOfWondersComponent;
  let fixture: ComponentFixture<B111WarOfWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B111WarOfWondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B111WarOfWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
