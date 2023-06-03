import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeDialogComponent } from './cheque-dialog.component';

describe('ChequeDialogComponent', () => {
  let component: ChequeDialogComponent;
  let fixture: ComponentFixture<ChequeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
