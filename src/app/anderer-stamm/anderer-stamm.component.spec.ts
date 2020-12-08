import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndererStammComponent } from './anderer-stamm.component';

describe('AndererStammComponent', () => {
  let component: AndererStammComponent;
  let fixture: ComponentFixture<AndererStammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndererStammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndererStammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
