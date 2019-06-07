import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShopComponent } from './movie-shop.component';
import { MoviePresentationComponent } from '../movie-presentation/movie-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';


  describe('MovieShopComponent', () => {
    let component: MovieShopComponent;
  let fixture: ComponentFixture<MovieShopComponent>;
  //let activatedRoute = new ActivatedRouteStub({id: 1})

  beforeEach(async(() => {
    //activatedRoute.setParamMap({id: 1});
    TestBed.configureTestingModule({
      declarations: [ MovieShopComponent, ShoppingCartComponent, MoviePresentationComponent ],
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
});
