import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedsFormComponent } from './cat-breeds-form.component';

describe('CatBreedsFormComponent', () => {
  let component: CatBreedsFormComponent;
  let fixture: ComponentFixture<CatBreedsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatBreedsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBreedsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
