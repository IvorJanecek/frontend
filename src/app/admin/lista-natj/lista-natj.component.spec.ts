import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNatjComponent } from './lista-natj.component';

describe('ListaNatjComponent', () => {
  let component: ListaNatjComponent;
  let fixture: ComponentFixture<ListaNatjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNatjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNatjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
