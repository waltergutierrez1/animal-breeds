import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatBreedsPageComponent } from './pages/cat-breeds-page/cat-breeds-page.component';
import { CatRoutingModule } from './cat-routing.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ReactiveFormsModule } from '@angular/forms';
import { CatBreedsListComponent } from './components/cat-breeds-list/cat-breeds-list.component';
import { CatBreedsDetailPageComponent } from './pages/cat-breeds-detail-page/cat-breeds-detail-page.component';
import { CatBreedsDetailComponent } from './components/cat-breeds-detail/cat-breeds-detail.component';


@NgModule({
  declarations: [
    CatBreedsPageComponent,
    CatBreedsListComponent,
    CatBreedsDetailPageComponent,
    CatBreedsDetailComponent
  ],
  imports: [
    CatRoutingModule,
    CommonModule,
    MatBottomSheetModule,
    ReactiveFormsModule
  ],
  
})
export class CatModule { }
