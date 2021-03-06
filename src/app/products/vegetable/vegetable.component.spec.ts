import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableComponent } from './vegetable.component';

describe('LaptopComponent', () => {
  let component: VegetableComponent;
  let fixture: ComponentFixture<VegetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
