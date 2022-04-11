import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatLoadComponent } from './creat-load.component';

describe('CreatLoadComponent', () => {
  let component: CreatLoadComponent;
  let fixture: ComponentFixture<CreatLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
