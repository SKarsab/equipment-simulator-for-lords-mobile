import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCardComponent } from './build-card.component';

describe('BuildCardComponent', () => {
  let component: BuildCardComponent;
  let fixture: ComponentFixture<BuildCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
