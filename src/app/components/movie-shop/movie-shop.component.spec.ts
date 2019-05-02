import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShopComponent } from './movie-shop.component';
import { MoviePresentationComponent } from '../movie-presentation/movie-presentation.component';
import { HttpClientModule } from '@angular/common/http';


describe('MovieShopComponent', () => {
  let component: MovieShopComponent;
  let fixture: ComponentFixture<MovieShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MovieShopComponent, MoviePresentationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
