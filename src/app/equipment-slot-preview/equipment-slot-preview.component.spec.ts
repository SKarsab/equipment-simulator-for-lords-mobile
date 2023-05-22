import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSlotPreviewComponent } from './equipment-slot-preview.component';

describe('EquipmentSlotPreviewComponent', () => {
  let component: EquipmentSlotPreviewComponent;
  let fixture: ComponentFixture<EquipmentSlotPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentSlotPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentSlotPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
