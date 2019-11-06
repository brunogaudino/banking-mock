import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPublicTitlesComponent } from './card-public-titles.component';

describe('CardPublicTitlesComponent', () => {
  let component: CardPublicTitlesComponent;
  let fixture: ComponentFixture<CardPublicTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPublicTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPublicTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
