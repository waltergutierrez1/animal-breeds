import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedsDetailComponent } from './cat-breeds-detail.component';

describe('CatBreedsDetailComponent', () => {
  let component: CatBreedsDetailComponent;
  let fixture: ComponentFixture<CatBreedsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatBreedsDetailComponent]
    });
    fixture = TestBed.createComponent(CatBreedsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
