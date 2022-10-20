import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEventComponent } from './table-event.component';

describe('TableEventComponent', () => {
  let component: TableEventComponent;
  let fixture: ComponentFixture<TableEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
