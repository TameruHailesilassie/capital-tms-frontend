import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadTable } from './loadtable.component';



describe('ActiveloadComponent', () => {
  let component: LoadTable;
  let fixture: ComponentFixture<LoadTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadTable ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
