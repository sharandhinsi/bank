import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankscreenComponent } from './bankscreen.component';

describe('BankscreenComponent', () => {
  let component: BankscreenComponent;
  let fixture: ComponentFixture<BankscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
