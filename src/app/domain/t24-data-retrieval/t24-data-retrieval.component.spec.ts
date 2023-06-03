import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T24DataRetrievalComponent } from './t24-data-retrieval.component';

describe('T24DataRetrievalComponent', () => {
  let component: T24DataRetrievalComponent;
  let fixture: ComponentFixture<T24DataRetrievalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T24DataRetrievalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T24DataRetrievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
