import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRouteStub } from 'src/testing/activaded-route-stub';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ModalComponent } from '../modal/modal.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let activatedRoute = new ActivatedRouteStub({id: 1})

  beforeEach(async(() => {
    activatedRoute.setParamMap({id: 1});
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, ShoppingCartComponent, ModalComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{provide: activatedRoute, useValue: activatedRoute},
      {provide: DataService, useClass: MockDataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 