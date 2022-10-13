import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModule, WidgetModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { WidgetsUpsstatusComponent } from './widgets-upsstatus.component';

describe('WidgetsUpsComponent', () => {
  let component: WidgetsUpsstatusComponent;
  let fixture: ComponentFixture<WidgetsUpsstatusComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsUpsstatusComponent ],
      imports: [WidgetModule, GridModule, ChartjsModule, IconModule],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(WidgetsUpsstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
