import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartFullsizeComponent } from './shopping-cart-fullsize.component';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ICartProduct } from 'src/app/interfaces/ICartProducts';

describe('ShoppingCartFullsizeComponent', () => {
  let component: ShoppingCartFullsizeComponent;
  let fixture: ComponentFixture<ShoppingCartFullsizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartFullsizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartFullsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add one movie', () => {

    component.clearLocal();
    expect(component.cartMovies.length).toEqual(0);
    const service = new MockDataService();
    service.getData().subscribe((products) =>{
    component.addToCart(products[0]);
    expect(component.cartMovies.length).toEqual(1);
    component.clearLocal();
    });
  });

  it('should add two diffrent movies', () => {

    const service = new MockDataService();
    service.getData().subscribe((products) =>{
    component.addToCart(products[0]);
    component.addToCart(products[1]);

    expect(component.cartMovies.length).toEqual(2);
    component.clearLocal();
    });
  });

  it('should add amount of the same movie', () => {

    const service = new MockDataService();
    service.getData().subscribe((products) =>{
    component.addToCart(products[0]);
    component.addToCart(products[0]);

    expect(component.cartMovies.length).toEqual(1);
    component.clearLocal();
    });
  });

  it('should remove amount of one movie', () => {
    component.clearLocal();
    component.setLocal();
    const service = new MockDataService();
    service.getproductsWithAmount().subscribe((product) =>{
    component.remove(product[0]);
    expect(component.cartMovies[0].amount).toEqual(1);

    });
  });

  it('should uppdate totalPrice to amount * price', () => {
    component.clearLocal();
    const service = new MockDataService();
    service.getproductsWithAmount().subscribe((products: ICartProduct[]) =>{
    component.totalPriceFunction(products);
    expect(component.totalPrice).toEqual(150);

  });
});
});
