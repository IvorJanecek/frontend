import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUgovorComponent } from './upload-ugovor.component';

describe('UploadUgovorComponent', () => {
  let component: UploadUgovorComponent;
  let fixture: ComponentFixture<UploadUgovorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadUgovorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadUgovorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
