import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatjecajSideBarComponent } from './natjecaj-side-bar.component';

describe('NatjecajSideBarComponent', () => {
  let component: NatjecajSideBarComponent;
  let fixture: ComponentFixture<NatjecajSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatjecajSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatjecajSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

