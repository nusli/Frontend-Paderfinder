import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStammComponent } from './change-stamm.component';

describe('ChangeStammComponent', () => {
  let component: ChangeStammComponent;
  let fixture: ComponentFixture<ChangeStammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeStammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
