import { Component, OnInit } from '@angular/core';
import { CatBreedsService } from '../../services/cat-breeds.service';
import { CatBreeds } from 'src/app/core/models/cat-breeds.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const QUERY = 'limit=10&order=ASC&has_breeds=1&page=';

@Component({
  selector: 'app-cats-breeds-page',
  templateUrl: './cat-breeds-page.component.html',
  styleUrls: ['./cat-breeds-page.component.scss']
})
export class CatBreedsPageComponent implements OnInit {

  catBreeds: CatBreeds[] = [];
  catBreedsOriginal: CatBreeds[] = [];
  page: number = 0;
  searchCatBreedsForm!: FormGroup;

  constructor(
    private catBreedsService: CatBreedsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getCatBreeds();
  }

  getCatBreeds() {
    this.catBreedsService.getCatBreeds(`${QUERY}${this.page}`).subscribe(
      {
        next: (result) => {
          this.catBreedsOriginal = this.catBreedsOriginal.concat(result);
          this.catBreeds = this.catBreedsOriginal;
          this.page++;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }

  getCatBreedsPage() {
    this.getCatBreeds();
  }

  buildForm() {
    this.searchCatBreedsForm = this.formBuilder.group({
      searchCatBreeds: ['', Validators.required],
    });
  }

  searchCatBreeds() {
    const dataSearchCatBreedsForm = { ...this.searchCatBreedsForm.getRawValue() };
    if (dataSearchCatBreedsForm.searchCatBreeds === '') {
      this.catBreeds = this.catBreedsOriginal;
      return;
    }
    this.catBreeds = this.catBreedsOriginal.filter(carBreed => {
      return carBreed.id.includes(dataSearchCatBreedsForm.searchCatBreeds);
    });
  }
}
