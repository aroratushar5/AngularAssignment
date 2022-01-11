import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { GridItemComponent } from './grid-item/grid-item.component';



@NgModule({
  declarations: [
    CategoryPageComponent,
    GridItemComponent,
  ],
  imports: [
    CommonModule,
    CategoryPageRoutingModule
  ]
})
export class CategoryPageModule { }
