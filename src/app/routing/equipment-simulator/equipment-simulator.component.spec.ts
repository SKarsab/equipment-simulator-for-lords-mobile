import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSimulatorComponent } from './equipment-simulator.component';

describe('EquipmentSimulatorComponent', () => {
  let component: EquipmentSimulatorComponent;
  let fixture: ComponentFixture<EquipmentSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentSimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
