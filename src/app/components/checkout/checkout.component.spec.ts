import { CheckoutComponent } from './checkout.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShopComponent } from '../movie-shop/movie-shop.component';
import { MoviePresentationComponent } from '../movie-presentation/movie-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';


  describe('CheckoutComponent', () => {
    let component: CheckoutComponent;
    let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent, ShoppingCartComponent, MovieShopComponent, MoviePresentationComponent, ModalComponent ],
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      providers: [{provide: DataService, useClass: MockDataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
