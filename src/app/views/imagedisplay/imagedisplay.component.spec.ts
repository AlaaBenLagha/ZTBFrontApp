import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedisplayComponent } from './imagedisplay.component';

describe('ImagedisplayComponent', () => {
  let component: ImagedisplayComponent;
  let fixture: ComponentFixture<ImagedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagedisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
