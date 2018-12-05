import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveClientComponent } from './form-reactive-client.component';

describe('FormReactiveClientComponent', () => {
  let component: FormReactiveClientComponent;
  let fixture: ComponentFixture<FormReactiveClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
