import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionComponent } from './contraction.component';

describe('ContractionComponent', () => {
  let component: ContractionComponent;
  let fixture: ComponentFixture<ContractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
