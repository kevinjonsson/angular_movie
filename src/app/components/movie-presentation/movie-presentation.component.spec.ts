import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviePresentationComponent } from './movie-presentation.component';
import { Component } from '@angular/core';
import { MovieShopComponent } from '../movie-shop/movie-shop.component';
import { IData } from 'src/app/interfaces/IData';
import { RouterTestingModule } from '@angular/router/testing';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ModalComponent } from '../modal/modal.component';

describe('MoviePresentationComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePresentationComponent, TestHostComponent, MovieShopComponent, ShoppingCartComponent, ModalComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  @Component({
    selector: 'host-component',
    template: '<app-movie-presentation products="input"></app-movie-presentation>'
  })
  class TestHostComponent {
    input: IData[];

    setInput(newInput: IData[]) {
      this.input = newInput;
    }
  }
});
