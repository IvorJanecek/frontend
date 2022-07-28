import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNatjecajComponent } from './view-natjecaj.component';

describe('ViewNatjecajComponent', () => {
  let component: ViewNatjecajComponent;
  let fixture: ComponentFixture<ViewNatjecajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNatjecajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNatjecajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
