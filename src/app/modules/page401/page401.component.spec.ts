import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Page401Component } from './page401.component';

describe('Page500Component', () => {
  let component: Page401Component;
  let fixture: ComponentFixture<Page401Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Page401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
