import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UrlSiteEnum } from 'src/app/core/enums/url-site.enum';
import { CatBreeds } from 'src/app/core/models/cat-breeds.models';

@Component({
  selector: 'app-cat-breeds-list',
  templateUrl: './cat-breeds-list.component.html',
  styleUrls: ['./cat-breeds-list.component.scss']
})
export class CatBreedsListComponent {

  @Input() catBreeds : CatBreeds[] = [];
  constructor(
    private router: Router
  ) { }

  redirectDetail(id: string) {
    const url = `/${ UrlSiteEnum.catBreeds}/${ UrlSiteEnum.catBreedsDetail}/${id}`;
    this.router.navigateByUrl(url);
  }
}
