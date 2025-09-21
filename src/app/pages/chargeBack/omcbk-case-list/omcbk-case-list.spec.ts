import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmcbkCaseList } from './omcbk-case-list';

describe('OmcbkCaseList', () => {
  let component: OmcbkCaseList;
  let fixture: ComponentFixture<OmcbkCaseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmcbkCaseList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmcbkCaseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
