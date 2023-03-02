import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnBloc1Component } from './en-bloc1.component';

describe('EnBloc1Component', () => {
  let component: EnBloc1Component;
  let fixture: ComponentFixture<EnBloc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnBloc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnBloc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
