import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGamesSearchComponent } from './section-games-search.component';

describe('SectionGamesSearchComponent', () => {
  let component: SectionGamesSearchComponent;
  let fixture: ComponentFixture<SectionGamesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGamesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGamesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
