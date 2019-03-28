import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShowAllComponent } from './car-show-all.component';

describe('CarShowAllComponent', () => {
  let component: CarShowAllComponent;
  let fixture: ComponentFixture<CarShowAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarShowAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
