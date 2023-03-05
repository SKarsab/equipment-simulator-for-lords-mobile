import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSelectComponent } from './equipment-select.component';

describe('EquipmentSelectComponent', () => {
  let component: EquipmentSelectComponent;
  let fixture: ComponentFixture<EquipmentSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
