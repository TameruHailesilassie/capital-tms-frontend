import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaferwatchConfigComponent } from './saferwatch-config.component';

describe('SaferwatchConfigComponent', () => {
  let component: SaferwatchConfigComponent;
  let fixture: ComponentFixture<SaferwatchConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaferwatchConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaferwatchConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
