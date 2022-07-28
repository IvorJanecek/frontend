import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilnostSideBarComponent } from './mobilnost-side-bar.component';

describe('MobilnostSideBarComponent', () => {
  let component: MobilnostSideBarComponent;
  let fixture: ComponentFixture<MobilnostSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilnostSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilnostSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
