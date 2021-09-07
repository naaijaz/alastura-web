import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushspliceComponent } from './pushsplice.component';

describe('PushspliceComponent', () => {
  let component: PushspliceComponent;
  let fixture: ComponentFixture<PushspliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushspliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushspliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
