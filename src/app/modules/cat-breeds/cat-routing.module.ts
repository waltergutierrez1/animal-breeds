import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatBreedsPageComponent } from './pages/cat-breeds-page/cat-breeds-page.component';
import { CatBreedsDetailPageComponent } from './pages/cat-breeds-detail-page/cat-breeds-detail-page.component';
import { UrlSiteEnum } from 'src/app/core/enums/url-site.enum';

const routes: Routes = [
    { path: UrlSiteEnum.catBreedsList, component: CatBreedsPageComponent },
    { path: `${ UrlSiteEnum.catBreedsDetail}/:id`, component: CatBreedsDetailPageComponent },
    {
      path: '**',
      redirectTo: UrlSiteEnum.catBreedsList,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
