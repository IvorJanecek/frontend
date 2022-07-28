import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNatjecajComponent } from './create-natjecaj.component';

describe('CreateNatjecajComponent', () => {
  let component: CreateNatjecajComponent;
  let fixture: ComponentFixture<CreateNatjecajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNatjecajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNatjecajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
