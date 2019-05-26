import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShopComponent } from './movie-shop.component';
import { MoviePresentationComponent } from '../movie-presentation/movie-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { IData } from 'src/app/interfaces/IData';


  describe('MovieShopComponent', () => {
    let component: MovieShopComponent;
    let fixture: ComponentFixture<MovieShopComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ MoviePresentationComponent, MovieShopComponent, MovieShopComponent, ShoppingCartComponent ],
        imports: [RouterTestingModule, HttpClientModule]
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

    @Component({
      selector: 'host-component',
      template: '<app-movie-presentation products="input"></app-movie-presentation>'
    })
    class MovieShopComponent {
      input: IData[];
  
      setInput(newInput: IData[]) {
        this.input = newInput;
      }
    }
});
