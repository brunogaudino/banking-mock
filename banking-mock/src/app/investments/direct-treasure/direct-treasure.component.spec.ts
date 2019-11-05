import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectTreasureComponent } from './direct-treasure.component';

describe('DirectTreasureComponent', () => {
  let component: DirectTreasureComponent;
  let fixture: ComponentFixture<DirectTreasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectTreasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
