import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWarningsComponent } from './table-warnings.component';

describe('TableWarningsComponent', () => {
  let component: TableWarningsComponent;
  let fixture: ComponentFixture<TableWarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
