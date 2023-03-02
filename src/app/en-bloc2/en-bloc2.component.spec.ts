import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnBloc2Component } from './en-bloc2.component';

describe('EnBloc2Component', () => {
  let component: EnBloc2Component;
  let fixture: ComponentFixture<EnBloc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnBloc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnBloc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
