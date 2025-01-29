import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule} from '@angular/router';

import { ArticlesService } from './shared';
import { ArticlesListComponent } from './list';

@NgModule({
  declarations: [
    ArticlesListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
