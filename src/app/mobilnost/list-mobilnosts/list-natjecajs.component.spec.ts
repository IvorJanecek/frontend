import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNatjecajsComponent } from './list-natjecajs.component';

describe('ListNatjecajsComponent', () => {
  let component: ListNatjecajsComponent;
  let fixture: ComponentFixture<ListNatjecajsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNatjecajsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNatjecajsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
