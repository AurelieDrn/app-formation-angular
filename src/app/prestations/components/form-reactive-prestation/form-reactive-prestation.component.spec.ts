import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivePrestationComponent } from './form-reactive-prestation.component';

describe('FormReactivePrestationComponent', () => {
  let component: FormReactivePrestationComponent;
  let fixture: ComponentFixture<FormReactivePrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactivePrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactivePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
