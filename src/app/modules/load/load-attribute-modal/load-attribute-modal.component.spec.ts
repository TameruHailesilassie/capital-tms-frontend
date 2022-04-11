import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAttributeModalComponent } from './load-attribute-modal.component';

describe('LoadAttributeModalComponent', () => {
  let component: LoadAttributeModalComponent;
  let fixture: ComponentFixture<LoadAttributeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAttributeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAttributeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
