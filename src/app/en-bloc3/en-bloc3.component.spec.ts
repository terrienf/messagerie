import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnBloc3Component } from './en-bloc3.component';

describe('EnBloc3Component', () => {
  let component: EnBloc3Component;
  let fixture: ComponentFixture<EnBloc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnBloc3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnBloc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
