import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationConfigComponent } from './integration-config.component';

describe('IntegrationConfigComponent', () => {
  let component: IntegrationConfigComponent;
  let fixture: ComponentFixture<IntegrationConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
