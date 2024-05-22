import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedsPageComponent } from './cat-breeds-page.component';

describe('CatsBreedsComponent', () => {
  let component: CatBreedsPageComponent;
  let fixture: ComponentFixture<CatBreedsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatBreedsPageComponent]
    });
    fixture = TestBed.createComponent(CatBreedsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
