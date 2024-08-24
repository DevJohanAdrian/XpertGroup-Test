import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatsBreedsComponent } from './cats-breeds.component';


describe('CatsBreedsComponent', () => {
  let component: CatsBreedsComponent;
  let fixture: ComponentFixture<CatsBreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatsBreedsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
