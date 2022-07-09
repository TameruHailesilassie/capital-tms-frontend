import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickbookConfigComponent } from './quickbook-config.component';

describe('QuickbookConfigComponent', () => {
  let component: QuickbookConfigComponent;
  let fixture: ComponentFixture<QuickbookConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickbookConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbookConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
