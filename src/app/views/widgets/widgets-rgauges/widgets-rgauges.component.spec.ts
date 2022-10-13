import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsRgaugesComponent } from './widgets-rgauges.component';

describe('WidgetsRgaugesComponent', () => {
  let component: WidgetsRgaugesComponent;
  let fixture: ComponentFixture<WidgetsRgaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsRgaugesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsRgaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
