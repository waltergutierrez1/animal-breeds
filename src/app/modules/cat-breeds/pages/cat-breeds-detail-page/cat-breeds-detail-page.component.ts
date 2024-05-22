import { Component, OnInit } from '@angular/core';
import { CatBreedsService } from '../../services/cat-breeds.service';
import { Breed, CatBreedDetail } from 'src/app/core/models/cat-breeds.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-cat-breeds-detail',
  templateUrl: './cat-breeds-detail-page.component.html',
  styleUrls: ['./cat-breeds-detail-page.component.scss']
})
export class CatBreedsDetailPageComponent implements OnInit {

  catBreed: CatBreedDetail | undefined;
  breeds: Breed[] | undefined;

  constructor(
    private catBreedsService: CatBreedsService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCatBreeds();
  }

  getCatBreeds() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.catBreedsService.getCatBreedDetail(id).subscribe(
      {
        next: (result) => {
          this.catBreed = result;
          this.breeds = this.catBreed?.breeds;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }
}
