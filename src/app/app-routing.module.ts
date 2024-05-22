import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlSiteEnum } from './core/enums/url-site.enum';

const routes: Routes = [
  {
    path: UrlSiteEnum.catBreeds,
    loadChildren: () =>
      import('./modules/cat-breeds/cat.module').then(
        (m) => m.CatModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
