import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMobilnostComponent } from './create-mobilnost.component';

describe('CreateMobilnostComponent', () => {
  let component: CreateMobilnostComponent;
  let fixture: ComponentFixture<CreateMobilnostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMobilnostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMobilnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
