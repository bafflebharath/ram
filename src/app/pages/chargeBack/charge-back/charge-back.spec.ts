import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeBack } from './charge-back';

describe('ChargeBack', () => {
  let component: ChargeBack;
  let fixture: ComponentFixture<ChargeBack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeBack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeBack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
