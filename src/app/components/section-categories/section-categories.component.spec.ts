import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCategoriesComponent } from './section-categories.component';

describe('SectionCategoriesComponent', () => {
  let component: SectionCategoriesComponent;
  let fixture: ComponentFixture<SectionCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
