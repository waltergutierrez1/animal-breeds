import { Component, Input } from '@angular/core';
import { Breed, CatBreeds } from 'src/app/core/models/cat-breeds.models';
import { CatBreedsService } from '../../services/cat-breeds.service';

const QUERY = 'breed_ids=';

@Component({
  selector: 'app-cat-breeds-detail',
  templateUrl: './cat-breeds-detail.component.html',
  styleUrls: ['./cat-breeds-detail.component.scss']
})
export class CatBreedsDetailComponent {

  @Input() breed: Breed | undefined;
  catBreeds: CatBreeds[] = [];
  imgBreed: string | undefined;

  constructor(
    private catBreedsService: CatBreedsService,
  ) { }

  ngOnInit(): void {
    this.getCatBreeds();
  }

  getCatBreeds() {
    this.catBreedsService.getCatBreeds(`${QUERY}${this.breed?.id}`).subscribe(
      {
        next: (result) => {
          this.catBreeds = result;
          this.imgBreed = this.catBreeds.length > 0 ? this.catBreeds[0].url : '';
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }

}
