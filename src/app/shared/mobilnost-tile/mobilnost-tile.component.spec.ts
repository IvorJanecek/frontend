import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilnostTileComponent } from '../mobilnost-tile/mobilnost-tile.component';

describe('MobilnostTileComponent', () => {
  let component: MobilnostTileComponent;
  let fixture: ComponentFixture<MobilnostTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilnostTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilnostTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
