import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsBenchmarksComponent } from './builds-benchmarks.component';

describe('BuildsBenchmarksComponent', () => {
  let component: BuildsBenchmarksComponent;
  let fixture: ComponentFixture<BuildsBenchmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildsBenchmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildsBenchmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
