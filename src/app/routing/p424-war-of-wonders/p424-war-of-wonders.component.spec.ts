import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P424WarOfWondersComponent } from './p424-war-of-wonders.component';

describe('P424WarOfWondersComponent', () => {
  let component: P424WarOfWondersComponent;
  let fixture: ComponentFixture<P424WarOfWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P424WarOfWondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P424WarOfWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
