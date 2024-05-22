import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedsListComponent } from './cat-breeds-list.component';

describe('CatBreedsListComponent', () => {
  let component: CatBreedsListComponent;
  let fixture: ComponentFixture<CatBreedsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatBreedsListComponent]
    });
    fixture = TestBed.createComponent(CatBreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
