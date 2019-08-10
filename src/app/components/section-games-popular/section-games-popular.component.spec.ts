import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGamesPopularComponent } from './section-games-popular.component';

describe('SectionGamesPopularComponent', () => {
  let component: SectionGamesPopularComponent;
  let fixture: ComponentFixture<SectionGamesPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGamesPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGamesPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
