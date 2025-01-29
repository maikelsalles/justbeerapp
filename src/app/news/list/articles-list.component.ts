import { Component, OnInit } from '@angular/core';

import { Article } from '../shared/articles.model';

import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.sass']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];


  constructor(
    private articlesService: ArticlesService
  ){
    this.getArticles()
  }

  ngOnInit(): void {
    
  }

  getArticles() {
    this.articlesService
    .getAll()
    .subscribe((data:any) => {
      this.articles = data.payload;
    });
  }

  
  
}
