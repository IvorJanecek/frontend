import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrijaveComponent } from './list-prijave.component';

describe('ListPrijaveComponent', () => {
  let component: ListPrijaveComponent;
  let fixture: ComponentFixture<ListPrijaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrijaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrijaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
