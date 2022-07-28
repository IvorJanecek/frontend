import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMobilnostsComponent } from './list-mobilnosts.component';

describe('ListMobilnostsComponent', () => {
  let component: ListMobilnostsComponent;
  let fixture: ComponentFixture<ListMobilnostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMobilnostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMobilnostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
