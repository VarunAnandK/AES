import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialuserComponent } from './partialuser.component';

describe('PartialuserComponent', () => {
  let component: PartialuserComponent;
  let fixture: ComponentFixture<PartialuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
