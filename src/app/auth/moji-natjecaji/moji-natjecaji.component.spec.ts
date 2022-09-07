import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiNatjecajiComponent } from './moji-natjecaji.component';

describe('MojiNatjecajiComponent', () => {
  let component: MojiNatjecajiComponent;
  let fixture: ComponentFixture<MojiNatjecajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojiNatjecajiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojiNatjecajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
