import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRealtimeComponent } from './body-realtime.component';

describe('BodyRealtimeComponent', () => {
  let component: BodyRealtimeComponent;
  let fixture: ComponentFixture<BodyRealtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyRealtimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
