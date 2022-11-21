import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ClientDetailWrapperComponent } from './client-detail-wrapper.component';

describe('ClientDetailComponent', () => {
  let component: ClientDetailWrapperComponent;
  let fixture: ComponentFixture<ClientDetailWrapperComponent>;
  let router: Router;
  let route: ActivatedRoute; 
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ ClientDetailWrapperComponent ],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDetailWrapperComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
