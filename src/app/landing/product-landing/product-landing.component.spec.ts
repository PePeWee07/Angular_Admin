import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandingComponent } from './product-landing.component';

describe('ProductLandingComponent', () => {
  let component: ProductLandingComponent;
  let fixture: ComponentFixture<ProductLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
