import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatBreedsService {

  constructor(private baseService: BaseService) { }

  getCatBreeds(queryParams: string): Observable<any> {
    return this.baseService.getMethod(`${environment.apiCat.urlApiBase}${environment.apiCat.urlCatBreeds}?${queryParams}`);
  }

  getCatBreedDetail(id: string | undefined): Observable<any> {
    return this.baseService.getMethod(`${environment.apiCat.urlApiBase}${environment.apiCat.urlCatBreedDetail}/${id}`);
  }
}


