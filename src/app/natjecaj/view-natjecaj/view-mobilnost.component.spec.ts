import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMobilnostComponent } from './view-mobilnost.component';

describe('ViewMobilnostComponent', () => {
  let component: ViewMobilnostComponent;
  let fixture: ComponentFixture<ViewMobilnostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMobilnostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMobilnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
