import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShopComponent } from './movie-shop.component';
import { MoviePresentationComponent } from '../movie-presentation/movie-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ModalComponent } from '../modal/modal.component';


  describe('MovieShopComponent', () => {
    let component: MovieShopComponent;
    let fixture: ComponentFixture<MovieShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieShopComponent, ShoppingCartComponent, MoviePresentationComponent, ModalComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
      {provide: DataService, useClass: MockDataService}]
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

  it('should create a list of 2 movies', () => {
    fixture = TestBed.createComponent(MovieShopComponent);
    component = fixture.componentInstance;
    expect(component.products.length).toBe(2);
  });

  it('should create 4 categories', () => {
    fixture = TestBed.createComponent(MovieShopComponent);
    component = fixture.componentInstance;
    expect(component.categorys.length).toBe(4);
  });
});
