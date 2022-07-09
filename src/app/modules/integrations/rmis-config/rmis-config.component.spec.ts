import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmisConfigComponent } from './rmis-config.component';

describe('RmisConfigComponent', () => {
  let component: RmisConfigComponent;
  let fixture: ComponentFixture<RmisConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmisConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmisConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
