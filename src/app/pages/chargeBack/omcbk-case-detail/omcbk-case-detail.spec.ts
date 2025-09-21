import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmcbkCaseDetail } from './omcbk-case-detail';

describe('OmcbkCaseDetail', () => {
  let component: OmcbkCaseDetail;
  let fixture: ComponentFixture<OmcbkCaseDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmcbkCaseDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmcbkCaseDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
