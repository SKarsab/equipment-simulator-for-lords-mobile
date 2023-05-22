import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B442WarOfWondersComponent } from './b442-war-of-wonders.component';

describe('B442WarOfWondersComponent', () => {
  let component: B442WarOfWondersComponent;
  let fixture: ComponentFixture<B442WarOfWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B442WarOfWondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B442WarOfWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
