import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGamesTopComponent } from './section-games-top.component';

describe('SectionGamesTopComponent', () => {
  let component: SectionGamesTopComponent;
  let fixture: ComponentFixture<SectionGamesTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGamesTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGamesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
