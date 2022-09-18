import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatjecajTileComponent } from './natjecaj-tile.component';

describe('NatjecajTileComponent', () => {
  let component: NatjecajTileComponent;
  let fixture: ComponentFixture<NatjecajTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatjecajTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatjecajTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
