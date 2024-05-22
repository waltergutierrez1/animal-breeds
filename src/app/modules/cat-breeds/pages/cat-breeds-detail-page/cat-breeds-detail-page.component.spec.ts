import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedsDetailPageComponent } from './cat-breeds-detail-page.component';

describe('CatBreedsDetailComponent', () => {
  let component: CatBreedsDetailPageComponent;
  let fixture: ComponentFixture<CatBreedsDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatBreedsDetailPageComponent]
    });
    fixture = TestBed.createComponent(CatBreedsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
