import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: CarouselComponent, pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
