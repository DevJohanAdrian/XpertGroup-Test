import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTableFiltersComponent } from './cat-table-filters.component';

describe('CatTableFiltersComponent', () => {
  let component: CatTableFiltersComponent;
  let fixture: ComponentFixture<CatTableFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatTableFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
