import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopmentComponent } from './devlopment.component';

describe('DevlopmentComponent', () => {
  let component: DevlopmentComponent;
  let fixture: ComponentFixture<DevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevlopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
