import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddNewComponent } from './car-add-new.component';

describe('CarAddNewComponent', () => {
  let component: CarAddNewComponent;
  let fixture: ComponentFixture<CarAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
