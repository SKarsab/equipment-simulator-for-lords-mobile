import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B244WarOfWondersComponent } from './b244-war-of-wonders.component';

describe('B244WarOfWondersComponent', () => {
  let component: B244WarOfWondersComponent;
  let fixture: ComponentFixture<B244WarOfWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B244WarOfWondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B244WarOfWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
