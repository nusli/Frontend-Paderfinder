import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StammComponent } from './stamm.component';

describe('StammComponent', () => {
  let component: StammComponent;
  let fixture: ComponentFixture<StammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
